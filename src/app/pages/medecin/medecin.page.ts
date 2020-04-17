import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.page.html',
  styleUrls: ['./medecin.page.scss'],
})
export class MedecinPage implements OnInit {

  public medecin;
  public medecinID;

  constructor(private httpClient : HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.medecinID = this.route.snapshot.paramMap.get('id'); 
    this.getMedecinById(this.medecinID)
      
  }


  getMedecinById(ID : number){
    this.httpClient
      .get<any[]>(environment.server + "api/getUser.php?iduser=" + ID) // changer la route
      .subscribe(
        (response) => {
            this.medecin = response[0];  
            console.log(this.medecin);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }


}
