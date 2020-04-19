import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public data;

  constructor(private httpClient : HttpClient, private router : Router ) { }

  getAllData(){
    let headers = new HttpHeaders();

    let url = environment.server + "api/getDailyStatut.php?patientid=6";

    headers = headers.set('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = { headers: headers };
    
    this.httpClient
      .get( url, options )
      .subscribe(
        (response) => {
          
          this.data = response;
         // console.log(this.data);
        },
        (error) => {
          console.log( "erreur", error.message );
        }
      );
  }
}
