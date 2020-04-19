import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.page.html',
  styleUrls: ['./medecin.page.scss'],
})
export class MedecinPage implements OnInit {

  public medecin;
  public medecinID;
  data: [];

  constructor(private httpClient: HttpClient,
    private toastController : ToastController,
    private route: ActivatedRoute,
    private storage: Storage) { }



  ngOnInit() {
    this.storage.get('dataUser').then((val) => {
      this.data = val;
    });
    this.medecinID = this.route.snapshot.paramMap.get('id');
    console.log(this.medecinID);

    this.getMedecinById(this.medecinID);
  }


  getMedecinById(ID: number) {
    this.httpClient
      .get<any[]>(environment.server + "api/getUser.php?iduser=" + ID) // changer la route
      .subscribe(
        (response) => {
          this.medecin = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  /*
  startCall(number : string){
    this.callNumber.callNumber(number, true)
                   .then(res => console.log('Launched dialer!', res))
                   .catch(err => console.log('Error launching dialer', err));
  }
  */

 async presentToast() {
  const toast = await this.toastController.create({
    message: 'Bientot disponible !',
    color :"success",
    duration: 2000
  });
  toast.present();
}


}
