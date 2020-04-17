import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient,
              private router : Router,
              private authService : AuthenticationService,
              private storage: Storage) { }

  login(email :string, password : string, errora : string){
      let headers = new HttpHeaders();
      let url = environment.server + "api/ConnectUser.php";
      let dataForm = {"email":email,"password":password};
  
      headers = headers.set('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
      let options = { headers: headers };
      
      this.httpClient
        .post(url, JSON.stringify(dataForm), options)
        .subscribe(
          (data) => {
            if(data['status'] == "OK"){
              errora = null;
              this.storage.set('dataUser',data['message'] );
              this.authService.login();
              console.log(this.authService.data);
              
              this.router.navigate(['acceuil']);

            }else{
              errora = "Aie... " + data['message'];
              console.log("erreur", errora);
            }        
          },
          (error) => {
            errora = "Aie... " + error.message;
            console.log("erreu", errora);

          }
        );
  }


}
