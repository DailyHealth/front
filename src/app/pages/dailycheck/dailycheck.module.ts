import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailycheckPageRoutingModule } from './dailycheck-routing.module';

import { DailycheckPage } from './dailycheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DailycheckPageRoutingModule
  ],
  declarations: [DailycheckPage]
})
export class DailycheckPageModule {}
