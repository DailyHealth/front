import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  constructor(private httpClient : HttpClient, private router : Router) { }

  postUrlZoom(formData){
    let headers = new HttpHeaders();
    
    let url = environment.server + "api/CreateZoom.php";

    headers = headers.set('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = { headers: headers };
    
    this.httpClient
      .post(url, JSON.stringify(formData), options)
      .subscribe(
        (data) => {
          if(data['status'] == "OK"){

          }else{
            console.log("erreur", data['message']);
          }        
        },
        (error) => {
          console.log("erreu", error.message);
        }
      );
}
}
