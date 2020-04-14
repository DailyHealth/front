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
      title: 'Acceuil',
      url: 'acceuil',
      icon: 'home',
      color: 'primary',
      info : 'Page d\'acceuil'
    },
    {
      title: 'Analyser ma santé',
      url: 'dailycheck',
      icon: 'heart-circle',
      color:'danger',
      info: ''
    },
    {
      title: 'Médecins',
      url: 'medecin',
      icon: 'medkit',
      color:'success',
      info: 'Page ou vous retrouverez tous les alcohols que vous avez sélectionnez.'
    },
    {
      title: 'Patients',
      url: 'patient',
      icon: 'people-circle',
      color:'warning',
      info: 'Page ou vous retrouverez tous les alcohols que vous avez sélectionnez.'
    },
    {
      title: 'Login',
      url: 'login',
      icon: 'person',
      color: 'secondary',
      info: 'Retrouver toutes vos consommation préféré'
    },
    {
      title: 'Historiques',
      url: 'history',
      icon: 'archive',
      color:'tertiary'
    },
    {
      title: 'Options',
      url: '/folder/Options',
      icon: 'settings',
      color: 'medium'
    },
  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

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
