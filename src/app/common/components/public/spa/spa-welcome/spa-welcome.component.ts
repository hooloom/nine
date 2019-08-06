import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'spa-welcome',
  templateUrl: './spa-welcome.component.html',
  styleUrls: ['./spa-welcome.component.css']
})
export class SpaWelcome implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }

  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})

    // this.Data=
    // this.bodydata;

  }
}
