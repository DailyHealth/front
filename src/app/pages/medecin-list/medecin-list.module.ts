import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedecinListPageRoutingModule } from './medecin-list-routing.module';

import { MedecinListPage } from './medecin-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedecinListPageRoutingModule
  ],
  declarations: [MedecinListPage]
})
export class MedecinListPageModule {}
