import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public error : string = "";

  constructor(private loginService : LoginService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.initForm();
    }

    initForm() {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
    }


    login(){
      this.loginService.login( this.loginForm.value.get('email'),this.loginForm.value.get('password'), this.error);
    }
}
