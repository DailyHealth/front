import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailycheckPage } from './dailycheck.page';

const routes: Routes = [
  {
    path: '',
    component: DailycheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailycheckPageRoutingModule {}
