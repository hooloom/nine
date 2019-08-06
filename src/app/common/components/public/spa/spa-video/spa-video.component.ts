import { LocalStorageService } from '../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { youtubePlayer } from '../youtube/player.youtube';
import { SpaYoutubeModal } from '../spa-youtube-modal/spa-youtube-modal.component';

@Component({
  selector: 'spa-video',
  templateUrl: './spa-video.component.html',
  styleUrls: ['./spa-video.component.css']
})
export class SpaVideo implements OnInit {
  Data: Observable<any>;
  youtube;

  constructor(
    private localstore: LocalStorageService, 
    private changeRef: ChangeDetectorRef,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.changeRef.detectChanges()
    this.Data=this.localstore.select(document.location.hostname, {})
    this.Data.subscribe(data=>this.youtube=data)
    console.log(this.youtube)
    
    // this.Data=
    // this.bodydata;

  }

  open() {
    const modalRef = this.modalService.open(SpaYoutubeModal, { centered: true });

    modalRef.componentInstance.name = this.youtube[0].spaconfig.component.youtube.playlist.videoName;
    
  }
 

}
