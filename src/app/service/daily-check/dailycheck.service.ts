import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailycheckService {

  constructor(private httpClient : HttpClient, private router : Router ) { }

  saveDailyCheck( formData ){
    let headers = new HttpHeaders();

    let url = environment.server + "api/CreateDailyStatut.php";

    headers = headers.set('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = { headers: headers };
    
    this.httpClient
      .post( url, JSON.stringify(formData), options )
      .subscribe(
        (data) => {
          if( data['status'] == "OK" ) {
           this.router.navigate( ['acceuil'] );
            
          } else {
            console.log( "erreur", data['message'] );
          }        
        },
        (error) => {
          console.log( "erreur", error.message );
        }
      );
  }
}
