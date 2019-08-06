import { LocalStorageService } from '../../../../services/localstorage.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, ChangeDetectorRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';

@Component({
  
  selector: 'spa-carousel',
  templateUrl: './spa-carousel.component.html',
  styleUrls: ['./spa-carousel.component.css']
})
export class SpaCarousel implements OnInit {
  Data: Observable<any>;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    }
  }
  constructor(private localstore: LocalStorageService, private changeRef: ChangeDetectorRef) { }
   subData;
  ngOnInit() {
    this.changeRef.detectChanges()
    this.Data=this.localstore.select(document.location.hostname, {})
  }
 

}
