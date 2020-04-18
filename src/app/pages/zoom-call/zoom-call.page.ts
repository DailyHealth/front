import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/auth/authentication.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ZoomService } from 'src/app/service/zoom/zoom.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';


@Component({
  selector: 'app-zoom-call',
  templateUrl: './zoom-call.page.html',
  styleUrls: ['./zoom-call.page.scss'],
})
export class ZoomCallPage implements OnInit {

  zoomForm: FormGroup;
  zoomData: any ;
  public url: string = "";
  medecinID: string;
  patientID :string;
  data: [];

  constructor(public auth: AuthenticationService, private storage: Storage, 
              private formBuilder: FormBuilder, private route: ActivatedRoute, 
              private service: ZoomService, private httpClient : HttpClient) { }


  loadStorage() {

    this.storage.get('dataUser').then((val) => {
      this.data = val;        
    });

    this.zoomForm = this.formBuilder.group({
      patientid: [this.patientID],
      medecinid: [this.medecinID],
      url: ['', Validators.required],
    });
  }


  ngOnInit() {
    this.medecinID = this.route.snapshot.paramMap.get('idp');   
    this.patientID = this.route.snapshot.paramMap.get('idm'); 
    this.loadStorage();
    this.getZoomDataByPatientId();
  }

  submitFormZoom() {
    console.log(this.zoomForm.value);    
    this.service.postUrlZoom(this.zoomForm.value);
  }

  getZoomDataByPatientId(){       
    this.httpClient
      .get<any[]>(environment.server + "api/getZoom.php?patientid=" + this.patientID) // changer la route
      .subscribe(
        (response) => {
          let size = response.length;
          this.zoomData = response.slice(size-1)[0];          
          this.url = this.zoomData['Url'];         
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
