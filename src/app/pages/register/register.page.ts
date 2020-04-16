import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
  }

  register(form) {
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('acceuil');
    });
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
