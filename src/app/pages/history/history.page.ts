import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as CanvasJS from 'src/assets/external/canvasjs.min';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  @Input()
  public data;
  public rows: any;
  public patientId: Int16Array;


  constructor( private storage : Storage, private httpClient: HttpClient, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.storage.get('dataUser').then((val) => {
      console.log(val);
      
      this.data = val;
      this.patientId = val.idUser;
    });
    this.getAllData();
    console.log(this.patientId);
      //console.log(this.getAllData());
      //this.Chart();
    }

    getAllData(){
      this.httpClient
        .get<[]>(environment.server + "api/getDailyStatut.php?patientid=1")
        .subscribe(
          (response) => {
            
            this.rows = response;
           console.log(this.rows);
          },
          (error) => {
            console.log( "erreur", error.message );
          }
        );
  }

  Chart() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          console.log(this.rows),
          this.rows.forEach(element => {
            console.log(element);
            ///{ y: this.rows.Temperature, name: this.rows.date }
          }),
        ]
      }]
    });
      
    chart.render();
  }




}
