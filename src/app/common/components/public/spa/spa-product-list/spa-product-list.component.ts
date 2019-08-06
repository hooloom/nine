import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'spa-product-list',
  templateUrl: './spa-product-list.component.html',
  styleUrls: ['./spa-product-list.component.css']
})
export class SpaProductlist implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }

  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})

    // this.Data=
    // this.bodydata;

  }
}
