import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'spa-pricing-syndicate',
  templateUrl: './spa-pricing-syndicate.component.html',
  styleUrls: ['./spa-pricing-syndicate.component.css']
})
export class SpaPricingSyndicate implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }

  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})

    // this.Data=
    // this.bodydata;

  }
}
