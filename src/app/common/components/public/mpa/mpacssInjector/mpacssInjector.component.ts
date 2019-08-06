import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../../../../services/localstorage.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'mpacssInjector',
  template: `
  <ng-container *ngFor="let item of Data|async|keyvalue">
  <ng-container *ngFor="let items of item.value.mpaconfig.css|keyvalue">
  <link *ngIf="items.value.published" rel="stylesheet" type="text/css" [href]="items.value.link | sanitize" integrity="{{items.integrity}}" >
  </ng-container>
</ng-container>
`})

export class mpacssInjector implements OnInit {

  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }

  ngOnInit(){

    this.Data=this.localstore.select(document.location.hostname,{});
 
  }

}