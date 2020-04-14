import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./pages/acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./pages/patient/patient.module').then( m => m.PatientPageModule)
  },
  {
    path: 'medecin',
    loadChildren: () => import('./pages/medecin/medecin.module').then( m => m.MedecinPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'dailycheck',
    loadChildren: () => import('./pages/dailycheck/dailycheck.module').then( m => m.DailycheckPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
