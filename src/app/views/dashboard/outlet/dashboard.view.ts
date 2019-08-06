import { Router } from '@angular/router';

import { PublicDataService } from './../../../common/services/publicdata.service';
import { LocalStorageService } from './../../../common/services/localstorage.service';
import { Component, OnInit, Input } from "@angular/core";
import { shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'dashboard-view',
    templateUrl: './dashboard.view.html'

})
///default view is a catch all - we catch this view on the initial home route.  
export class DashboardView implements OnInit{
    storename=document.location.hostname;

    pubdata: Observable<any>;
    subdata;
    storedata;
    viewdata;
    Data: any;
    subData;

    constructor(private localstore: LocalStorageService, 
        private publicdata: PublicDataService, private router: Router) {

     }
  
    ngOnInit() {
               

        this.pubdata=this.publicdata.loadPublicData()
        .pipe(
      
            tap(
              data=>{
              this.storedata=data,
              this.localstore.set(this.storename, this.storedata)
            }
            )
          ),
          shareReplay(1)
          this.subdata=this.pubdata.subscribe();
          this.viewdata=this.localstore.select(this.storename);
          // this.getPage()
        this.Data=this.viewdata
      
      }
    
    
  
}