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
  public searchTerm : string = "";

  constructor(private httpClient : HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.getMedecinsFromServer();
     
          
  }


  /**
   * Fonction qui ajouter les données du formulaire d'ajout de la recette à la base
   * @param dataForm Donnée du formulaire à ajouter
   */
  addRecetteToServer() {
    let invocation = new XMLHttpRequest();
    let headers = new HttpHeaders();
    let url = environment.server + "index.php";
    let dataForm = {"action":5};

    
    console.log(JSON.stringify(dataForm));   
    headers = headers.set('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = { headers: headers };
    
    this.httpClient
      .post(url, JSON.stringify(dataForm), options)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log( error);
        }
      );
      
  }

  getMedecinsFromServer() {
    this.httpClient
      .get<any[]>(environment.server + "api/GetListUser.php?role=M")
      .subscribe(
        (response) => {
          this.medecins = response;    
          console.log(this.medecins );       
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  public tri(a, b) {
    if (a.name < b.name) return -1;
    else if (a.name == b.name) return 0;
    else return 1;
  }

  setFilteredItems() {
    this.medecins = this.filterItems(this.searchTerm)  
  }

  filterItems(searchTerm) {
    return this.medecins.filter(item => {
      return item.LastName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
