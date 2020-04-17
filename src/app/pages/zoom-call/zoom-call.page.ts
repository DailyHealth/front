import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/auth/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-zoom-call',
  templateUrl: './zoom-call.page.html',
  styleUrls: ['./zoom-call.page.scss'],
})
export class ZoomCallPage implements OnInit {

  public url : string = "";
  data : [];

  constructor(public auth : AuthenticationService, private storage : Storage) { }

  ngOnInit() {
    this.getUrl();
    this.storage.get('dataUser').then((val) => {
      console.log(val);
      
      this.data = val; 
    });
  }

  getUrl(){
    this.url = "https://us04web.zoom.us/j/76606878363?pwd=RlRRS2k0SGc3dHprL05BdzZWbUVnZz09"
  }

}
