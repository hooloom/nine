import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'spa-header',
  templateUrl: './spa-header.component.html',
  styleUrls: ['./spa-header.component.css']
})
export class SpaHeader implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }
  public loginCollapsed = true;
  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})

    // this.Data=
    // this.bodydata;

  }
}