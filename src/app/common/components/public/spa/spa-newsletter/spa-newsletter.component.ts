import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'spa-newsletter',
  templateUrl: './spa-newsletter.component.html',
  styleUrls: ['./spa-newsletter.component.css']
})
export class SpaNewsletter implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }

  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})

    // this.Data=
    // this.bodydata;

  }
}