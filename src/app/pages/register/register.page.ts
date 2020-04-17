import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/service/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  registerForm: FormGroup;
  
  constructor(private  router:  Router, private registerService : RegisterService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      role: ['', Validators.required],
      age: ['']
    });
  }

  register() {
      this.registerService.register(this.registerForm.value);
   }

  onChangeRole(value){
    let divPatient = document.getElementById("patient");
    let divMedecin = document.getElementById("medecin");

    if(value == "M"){
      console.log("mdecin show");

      divPatient.style.display = "none";
      divMedecin.style.display = "block";

    }else if(value == "P"){
      divPatient.style.display = "block";
      divMedecin.style.display = "none";


    }
  }
}
