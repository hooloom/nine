import { DashboardView } from './outlet/dashboard.view';
import { DashboardBillingView } from './billing/dashboard-billing.view';
import { DashboardProfileView } from './profile/dashboard-profile.view';
import { DashboardHomeView } from './home/dashboard-home.view';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const dashboardroutes: Routes = [
  {
   
    path: '',
    component: DashboardView, 
      children: [
        {
          path: '',

           component: DashboardHomeView,
      },
      {

        path: 'profile',
        component: DashboardProfileView,
    
       },
       {

        path: 'billing',
        component: DashboardBillingView,
    
       }
      ]

}
  

]


@NgModule({
  imports: [RouterModule.forChild(dashboardroutes)],
  exports: [RouterModule]
})
export class DashboardRouter { }