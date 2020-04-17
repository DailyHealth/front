import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/auth/authentication.service';
import { Storage } from '@ionic/storage';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  constructor(public auth : AuthenticationService, private storage : Storage) { }
  data : [];

  ngOnInit() {
    this.storage.get('dataUser').then((val) => {
      console.log(val);
      
      this.data = val; 
    });
  }

}
