import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private httpClient: HttpClient,
    private router: Router) { }

  register(dataform : FormData) {
    let headers = new HttpHeaders();
    let url = environment.server + "api/CreateUser.php";

    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = { headers: headers };

    this.httpClient
      .post(url, JSON.stringify(dataform), options)
      .subscribe(
        (data) => {
          if (data['status'] == "OK") {
            this.router.navigate(['acceuil']);
          } else {
            let error = "Aie... " + data['message'];
            console.log("erreur", error);
          }
        },
        (error) => {
          console.log("erreu", error.message);

        }
      );
  }

}
