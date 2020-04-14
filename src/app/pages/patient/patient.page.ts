import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  public patientID;
  public patient;
  
  constructor(private route: ActivatedRoute,
              private httpClient : HttpClient) { }

  ngOnInit() {
    this.patientID = this.route.snapshot.paramMap.get('id'); 
    this.getPatientsById(this.patientID);        
  }

  getPatientsById(ID : string){
    this.httpClient
      .get<any[]>(environment.server + "patient/" + ID) // changer la route
      .subscribe(
        (response) => {
          this.patient = response;  
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
