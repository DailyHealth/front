import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.page.html',
  styleUrls: ['./patient-list.page.scss'],
})
export class PatientListPage implements OnInit {

 
  public patientID;
  public patients;
  public searchTerm: string = "";
  
  constructor(private route: ActivatedRoute,
              private httpClient : HttpClient) { }

  ngOnInit() {
    this.getPatientsFromServer();
  }

  public tri(a, b) {
    if (a.name < b.name) return -1;
    else if (a.name == b.name) return 0;
    else return 1;
  }

  setFilteredItems() {
    if(this.patientID != "all"){
     // this.patients = this.alcoholService.filterItems(this.searchTerm).filter(a => a.categoryId == this.categoryID).sort(this.tri);
    }else{
     // this.patients = this.alcoholService.filterItems(this.searchTerm);
    }    
  }


  getPatientsFromServer() {
    this.httpClient
      .get<any[]>(environment.server + "patient")
      .subscribe(
        (response) => {
          this.patients = response;           
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
