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

    async getMedecinById(ID: string) {
      this.httpClient
        .get<any[]>(environment.server + "api/getUser.php?iduser=" + ID) // changer la route
        .subscribe(
          (response) => {
            this.medecin = response;
            console.log(response);
            
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

  ngOnInit() {
    this.getMedecinById(this.route.snapshot.paramMap.get('id'));

    this.initData()
  }


  async initData(){
    this.storage.get('dataUser').then((val) => {
      this.data = val;      
    });
 
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
