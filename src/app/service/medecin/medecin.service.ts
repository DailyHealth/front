import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  public medecins;

  constructor(private httpClient : HttpClient) { }

  getMedecinsFromServer() {
    this.httpClient
      .get<any[]>(environment.server + "api/GetListUser.php?role=M")
      .subscribe(
        (response) => {
          this.medecins = response;
          console.log(response);          
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
