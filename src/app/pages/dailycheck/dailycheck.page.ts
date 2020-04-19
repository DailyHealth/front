import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage'
import { ActivatedRoute } from '@angular/router';
import { DailycheckService } from 'src/app/service/daily-check/dailycheck.service';
import { element } from 'protractor';

@Component({
  selector: 'app-dailycheck',
  templateUrl: './dailycheck.page.html',
  styleUrls: ['./dailycheck.page.scss'],
})
export class DailycheckPage implements OnInit {

  dailyCheckForm : FormGroup;
  patientId: string;
  data : [];

  constructor( private formBuilder : FormBuilder, private storage : Storage, private service : DailycheckService, private route: ActivatedRoute) { 
    
  }
  ngOnInit() {
    this.storage.get('dataUser').then((val) => {
        this.data = val;
        this.patientId = val.idUser;
    });
    this.InitForm();
  }


  InitForm() {
    this.dailyCheckForm = this.formBuilder.group({
      patientid : [this.patientId != undefined ? this.patientId : ''],
      temperature: ['', Validators.required],
      poux: ['', Validators.required],
      fatigue: ['', Validators.required],
      mood: ['', Validators.required],
    });
  }

  saveDailyCheck() {
    this.service.saveDailyCheck( this.dailyCheckForm.value );
  }

}
