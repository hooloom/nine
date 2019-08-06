import { DashboardRouter } from './dashboard.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardBillingView } from './billing/dashboard-billing.view';

import { DashboardHomeView } from './home/dashboard-home.view';
import { DashboardProfileView } from './profile/dashboard-profile.view';
import { DashboardComponentsManifest } from '../../common/components/dashboardcomponents.manifest';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DashboardView } from './outlet/dashboard.view';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardComponentsManifest,
    NgbModule,
    HttpClientModule,
    DashboardRouter
  ],
  declarations: [DashboardView,DashboardBillingView,DashboardHomeView, DashboardProfileView],
  exports:[ DashboardView,DashboardBillingView,DashboardHomeView, DashboardProfileView]
})
export class DashboardManifest {}