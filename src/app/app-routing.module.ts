import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    path: 'patient/:id',
    loadChildren: () => import('./pages/patient/patient.module').then( m => m.PatientPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'medecin/:id',
    loadChildren: () => import('./pages/medecin/medecin.module').then( m => m.MedecinPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dailycheck',
    loadChildren: () => import('./pages/dailycheck/dailycheck.module').then( m => m.DailycheckPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'medecin-list',
    loadChildren: () => import('./pages/medecin-list/medecin-list.module').then( m => m.MedecinListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'patient-list',
    loadChildren: () => import('./pages/patient-list/patient-list.module').then( m => m.PatientListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'zoom-call',
    loadChildren: () => import('./pages/zoom-call/zoom-call.module').then( m => m.ZoomCallPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'stat',
    loadChildren: () => import('./pages/stat/stat.module').then( m => m.StatPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
