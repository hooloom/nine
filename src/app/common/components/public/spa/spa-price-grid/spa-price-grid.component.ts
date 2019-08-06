import { LocalStorageService } from '../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'spa-price-grid',
  templateUrl: './spa-price-grid.component.html',
  styleUrls: ['./spa-price-grid.component.css']
})
export class SpaPricegrid implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }

  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})
    // this.Data=
    // this.bodydata;

  }
}