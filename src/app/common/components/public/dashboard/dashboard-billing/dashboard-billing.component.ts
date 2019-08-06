import { LocalStorageService } from '../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'dashboard-billing',
  templateUrl: './dashboard-billing.component.html',
  styleUrls: ['./dashboard-billing.component.css']
})
export class DashboardBilling implements OnInit {
  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }
  public loginCollapsed = true;
  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})
  }
}