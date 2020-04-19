import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.page.html',
  styleUrls: ['./medecin-list.page.scss'],
})
export class MedecinListPage implements OnInit {

  public medecins;
  public searchTerm: string = "";


  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute) { }

 

  ngOnInit() {
   
    this.getMedecinsFromServer();
  }


  getMedecinsFromServer() {
    this.httpClient
      .get<any[]>(environment.server + "api/GetListUser.php?role=M")
      .subscribe(
        (response) => {
          this.medecins = response;
          console.log(response);
          
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public tri(a, b) {
    if (a.name < b.name) return -1;
    else if (a.name == b.name) return 0;
    else return 1;
  }

  async setFilteredItems() {
    this.httpClient
      .get<any[]>(environment.server + "api/GetListUser.php?role=M")
      .subscribe(
        (response) => {
          this.medecins = response.filter(item => {
            return item.LastName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
