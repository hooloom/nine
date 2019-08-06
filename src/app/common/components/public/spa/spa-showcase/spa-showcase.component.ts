import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'spa-showcase',
  templateUrl: './spa-showcase.component.html',
  styleUrls: ['./spa-showcase.component.css']
})
export class SpaShowcase implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }

  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})

    // this.Data=
    // this.bodydata;

  }
}
