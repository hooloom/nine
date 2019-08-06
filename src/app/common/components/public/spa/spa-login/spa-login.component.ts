import { LocalStorageService } from '../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spa-login',
  templateUrl: './spa-login.component.html',
  styleUrls: ['./spa-login.component.css']
})
export class SpaLogin implements OnInit {
  // @Input() headerdata: any;

  Data: Observable<any>;
  constructor(private localstore:LocalStorageService) { }

  ngOnInit(){

  this.Data=this.localstore.select(document.location.hostname, {})

    // =this.headerdata;
 
  }

}
