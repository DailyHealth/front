import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionUser } from '../model/session';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient,
              private sessionUser : SessionUser) { }

  login(email :string, password : string, errora : string){
      let headers = new HttpHeaders();
      let url = environment.server + "api/ConnectUser.php";
      let dataForm = {"email":email,"password":password};
  
      
      console.log(JSON.stringify(dataForm));   
      headers = headers.set('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
      let options = { headers: headers };
      
      this.httpClient
        .post(url, JSON.stringify(dataForm), options)
        .subscribe(
          (data) => {
            if(data['status'] == "OK"){
              this.sessionUser.isConnected = true;
              // this.sessionUser.dataUser = data;
            }else{
              this.sessionUser.isConnected = false;
              errora = "Aie... " + data['message'];
              console.log("erreur", errora);
            }        
          },
          (error) => {
            this.sessionUser.isConnected = false;
            errora = "Aie... " + error.message;
            console.log("erreu", errora);

          }
        );
  }

  createSession(data){

  }
}
