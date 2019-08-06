import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeader implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }
  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})
  }
}