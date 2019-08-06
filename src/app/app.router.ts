import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
},
  { path: 'home', loadChildren: () => import('./views/default/default.manifest').then(m => m.DefaultManifest)
  // , canActivate:[WelcomeGuard] 
  },

  { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.manifest').then(m => m.DashboardManifest)},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    useHash: true,
    onSameUrlNavigation: 'reload',
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRouter { }
