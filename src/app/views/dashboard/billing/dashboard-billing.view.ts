import { PublicDataService } from '../../../common/services/publicdata.service';
import { LocalStorageService } from '../../../common/services/localstorage.service';
import { Component, OnInit, Input } from "@angular/core";
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
    selector: 'dashboard-billing-view',
    templateUrl: './dashboard-billing.view.html',
    styleUrls: ['./dashboard-billing.view.css']

})
///default view is a catch all - we catch this view on the initial home route.  
export class DashboardBillingView implements OnInit{
  Data: Observable<any>;
  subData;


    constructor(private localstore: LocalStorageService) { }
    public loginCollapsed = true;
    ngOnInit() {
      this.Data=this.localstore.select(document.location.hostname, {})
      this.Data.subscribe(data=>this.subData=data);
     //  console.log(this.subData[0].data.colors.primarycolor)
      document.documentElement.style.setProperty('--primary-color', this.subData[0].dashboardconfig.data.colors.primarycolor);
      document.documentElement.style.setProperty('--secondary-color', this.subData[0].dashboardconfig.data.colors.secondarycolor);
      document.documentElement.style.setProperty('--tirtiary-color', this.subData[0].dashboardconfig.data.colors.tirtiarycolor);
  
    }
  }
  

