import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email  : string;
  public password : string;
  public error : string = "";

  constructor(private loginService : LoginService) { }

  ngOnInit() {

    }

    login(){
      this.loginService.login(this.email,this.password, this.error);
    }
}
