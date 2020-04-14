import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.page.html',
  styleUrls: ['./medecin.page.scss'],
})
export class MedecinPage implements OnInit {

  public medecins;

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
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
}
