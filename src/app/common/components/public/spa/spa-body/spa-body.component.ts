import { LocalStorageService } from './../../../../services/localstorage.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'spa-body',
  templateUrl: './spa-body.component.html',
  styleUrls: ['./spa-body.component.css']
})
export class SpaBody implements OnInit {
  Data: Observable<any>;
 
  spabodyComponent: any;
  constructor(private localstore: LocalStorageService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.Data=this.localstore.select(document.location.hostname, {})
    this.cdRef.detectChanges();
  }
}
