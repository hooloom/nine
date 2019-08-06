
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../services/localstorage.service';

import { FormsModule } from '@angular/forms';
import { PipesManifest } from './../pipes/pipes.manifest';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { dashboardcssInjector } from './public/dashboard/dashboarcssInjector/dashboardcssInjector.component';
import { DashboardBilling } from './public/dashboard/dashboard-billing/dashboard-billing.component';
import { DashboardFooter } from './public/dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardHeader } from './public/dashboard/dashboard-header/dashboard-header.component';
import { DashboardHome } from './public/dashboard/dashboard-home/dashboard-home.component';
import { DashboardProfile } from './public/dashboard/dashboard-profile/dashboard-profile.component';

@NgModule({
    imports:[CommonModule, NgbModule, PipesManifest, FormsModule, CarouselModule, RouterModule],
    declarations:[dashboardcssInjector, DashboardBilling,DashboardFooter,DashboardHeader, DashboardHome, DashboardProfile],
    exports:[dashboardcssInjector, DashboardBilling, DashboardFooter,DashboardHeader, DashboardHome, DashboardProfile],
    entryComponents:[],
    providers:[LocalStorageService, NgbActiveModal]
   })
   export class DashboardComponentsManifest { }