import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
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
  public searchTerm : string = "";

  constructor(private httpClient : HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.medecinID = this.route.snapshot.paramMap.get('id'); 
    this.getMedecinById(this.medecinID)
      
  }


  getMedecinById(ID : number){
    this.httpClient
      .get<any[]>(environment.server + "medecin/" + ID) // changer la route
      .subscribe(
        (response) => {
          this.medecin = response;  
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }


}
