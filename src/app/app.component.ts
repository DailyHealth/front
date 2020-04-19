import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './service/auth/authentication.service';
import { Storage } from '@ionic/storage';
import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;
  data : [];
  public idMedecin;
  public idPatient;
  public appPages;
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth : AuthenticationService,
    private storage : Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  isShow(page, value) : boolean{
    let role = page['role'];    
    let res = role.find(e => e === value);  
    
    return res == undefined ? false : true ;
  }

  loadStorage(){
    this.storage.get('dataUser').then((val) => {
      this.data = val; 
      console.log(val);
    
      this.idMedecin = val['IdMedecin'] == '0' ? val['idUser'] : val['IdMedecin'];
      console.log("ID MEDECIN" , this.idMedecin);

  });

  this.appPages = [
    {
      title: 'Accueil',
      url: 'acceuil',
      icon: 'home',
      color: 'primary',
      info : 'Page d\'accueil',
      role:  ['A','P','M']
    },
    {
      title: 'Daily Check',
      url: 'dailycheck',
      icon: 'heart-circle',
      color:'danger',
      info: '',
      role: ['A','P']
    },
    {
      title: 'Médecins',
      url: 'medecin-list',
      icon: 'medkit',
      color:'success',
      info: '',
      role : ['A','P']
    },
    {
      title: 'Créer une réunion',
      url: 'zoom-call/'+ this.idMedecin,
      icon: 'videocam',
      color:'tertiary',
      info: '',
      role: ['A','P','M']
    },
    {
      title: 'Patients',
      url: 'patient-list',
      icon: 'people-circle',
      color:'warning',
      info: '',
      role: ['A','M']
    },
    /*
    {
      title: 'Rejoindre un appel',
      url: 'zoom-call/'+ this.data != undefined ? this.data['idUser'] : '0' + '/' + this.data !=  undefined ? this.data['IdMedecin'] : '0',
      icon: 'videocam',
      color:'tertiary',
      info: '',
      role: ['A','P','M']
    },
    */
    {
      title: 'Connexion/Déconnexion',
      url: 'login',
      icon: 'person',
      color: 'secondary',
      info: '',
      role : ['A','P','M']
    },
    {
      title: 'Historiques',
      url: 'history',
      icon: 'archive',
      color:'black',
      role:  ['A','P']
    },
  
  ];
  }

  ngOnInit() {

    this.loadStorage();    
  }
  
}
