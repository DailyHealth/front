import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: 'acceuil',
      icon: 'home',
      color: 'primary',
      info : 'Page d\'accueil'
    },
    {
      title: 'Daily Check',
      url: 'dailycheck',
      icon: 'heart-circle',
      color:'danger',
      info: ''
    },
    {
      title: 'Médecins',
      url: 'medecin-list',
      icon: 'medkit',
      color:'success',
      info: ''
    },
    {
      title: 'Patients',
      url: 'patient-list',
      icon: 'people-circle',
      color:'warning',
      info: ''
    },
    {
      title: 'Rejoindre un appel',
      url: 'zoom-call',
      icon: 'videocam',
      color:'tertiary',
      info: ''
    },
    {
      title: 'Login',
      url: 'login',
      icon: 'person',
      color: 'secondary',
      info: ''
    },
    {
      title: 'Historiques',
      url: 'history',
      icon: 'archive',
      color:'black'
    },
    {
      title: 'Satistique',
      url: 'stat',
      icon: 'bar-chart',
      color: 'medium'
    },
  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
