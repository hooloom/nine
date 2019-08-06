import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'spa-pricing',
  templateUrl: './spa-pricing.component.html',
  styleUrls: ['./spa-pricing.component.css']
})
export class SpaPricing implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }
  workers=0;
  volunteers=0;
  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {});
    
    // this.Data=
    // this.bodydata;

  }
  get cost() {
    return ((this.workers*1)+(this.volunteers*1))*2;
  }
}