import { LocalStorageService } from '../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spa-youtube-modal',
  templateUrl: './spa-youtube-modal.component.html',
  styleUrls: ['./spa-youtube-modal.component.css']
})
export class SpaYoutubeModal implements OnInit {
  Data: Observable<any>;
  @Input() name;

  constructor(
    private localstore: LocalStorageService, 
    private changeRef: ChangeDetectorRef,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.changeRef.detectChanges()
    this.Data=this.localstore.select(document.location.hostname, {})
    // this.Data=
    // this.bodydata;

  }

 

}