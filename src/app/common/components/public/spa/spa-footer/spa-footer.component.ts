import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from './../../../../services/localstorage.service';
@Component({
  selector: 'spa-footer',
  templateUrl: './spa-footer.component.html',
  styleUrls: ['./spa-footer.component.css']
})
export class SpaFooter implements OnInit {
  Data: Observable<any>;
  currentDate=Date.now();
  constructor(private localstore:LocalStorageService) { }

  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})

    // this.Data=this.footerdata
    
    // =this.localstore.select(document.location.hostname)

  }
}
