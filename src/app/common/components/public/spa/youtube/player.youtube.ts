import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../../../../services/localstorage.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'youtubePlayer',
  template: `
  <ng-container *ngFor="let item of Data|async">
  <iframe [class.thumbnail]="thumbnail" [src]="item.spaconfig.component.youtube.playlist.videoLink | sanitize" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen
      allowfullscreen></iframe>
</ng-container>
`})






export class youtubePlayer implements OnInit {


  Data: Observable<any>;
  constructor(private localstore: LocalStorageService) { }

  ngOnInit(){

    this.Data=this.localstore.select(document.location.hostname,{});
 
  }

}