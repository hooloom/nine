import { LocalStorageService } from '../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHome implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }
  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})
  }
}