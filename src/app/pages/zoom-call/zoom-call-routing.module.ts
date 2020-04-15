import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoomCallPage } from './zoom-call.page';

const routes: Routes = [
  {
    path: '',
    component: ZoomCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoomCallPageRoutingModule {}
