import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { Zoom } from '@ionic-native/zoom/ngx';

@Component({
  selector: 'app-zoom-call',
  templateUrl: './zoom-call.page.html',
  styleUrls: ['./zoom-call.page.scss'],
})
export class ZoomCallPage implements OnInit {

  public url : string = "";

  constructor(private toastCtrl: ToastController,
    private zoomService: Zoom,
    private platform: Platform) { }

  ngOnInit() {
    this.getUrl();
  }

  getUrl(){
    this.url = "https://us04web.zoom.us/j/76606878363?pwd=RlRRS2k0SGc3dHprL05BdzZWbUVnZz09"
  }

}
