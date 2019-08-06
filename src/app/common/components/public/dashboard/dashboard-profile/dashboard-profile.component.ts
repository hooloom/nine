import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.css']
})
export class DashboardProfile implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }
  public loginCollapsed = true;
  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})
  }
}