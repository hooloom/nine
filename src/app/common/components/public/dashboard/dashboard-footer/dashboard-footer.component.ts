import { LocalStorageService } from '../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.css']
})
export class DashboardFooter implements OnInit {
  Data: Observable<any>;
  currentDate=Date.now();
  constructor(private localstore: LocalStorageService) { }
  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})
  }
}