import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  constructor(private  router:  Router) { }

  ngOnInit() {
  }

  register(form) {
    
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
