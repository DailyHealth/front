import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoomCallPageRoutingModule } from './zoom-call-routing.module';

import { ZoomCallPage } from './zoom-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoomCallPageRoutingModule
  ],
  declarations: [ZoomCallPage]
})
export class ZoomCallPageModule {}
