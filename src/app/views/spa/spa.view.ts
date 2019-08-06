import { LocalStorageService } from './../../common/services/localstorage.service';
import { Component, OnInit, Input, ViewEncapsulation} from "@angular/core";
import { Observable } from 'rxjs';


@Component({
    selector: 'spa-view',
    templateUrl: './spa.view.html',
    styleUrls: ['./spa.view.css'],
    encapsulation: ViewEncapsulation.None,

})
export class SpaView implements OnInit {
Data: Observable<any>;

    constructor(private localstore:LocalStorageService) { }
    subData;
    currentDate=Date.now();
    ngOnInit() {
        
     this.Data=this.localstore.select(document.location.hostname, {})
     this.Data.subscribe(data=>this.subData=data);
    //  console.log(this.subData[0].data.colors.primarycolor)
    console.log(this.subData[0].spaconfig)
     document.documentElement.style.setProperty('--primary-color', this.subData[0].spaconfig.data.colors.primarycolor);
     document.documentElement.style.setProperty('--secondary-color', this.subData[0].spaconfig.data.colors.secondarycolor);
     document.documentElement.style.setProperty('--tirtiary-color', this.subData[0].spaconfig.data.colors.tirtiarycolor);
     document.documentElement.style.setProperty('--spacarousel-order', this.subData[0].spaconfig.spamanifest.spaCarousel.order);
     document.documentElement.style.setProperty('--spanewsletter-order', this.subData[0].spaconfig.spamanifest.spaNewsletter.order);
     document.documentElement.style.setProperty('--spapricing-order', this.subData[0].spaconfig.spamanifest.spaPricing.order);
     document.documentElement.style.setProperty('--spapricegrid-order', this.subData[0].spaconfig.spamanifest.spaPricegrid.order);
     document.documentElement.style.setProperty('--spaproductlist-order', this.subData[0].spaconfig.spamanifest.spaProductlist.order);
     document.documentElement.style.setProperty('--spashowcase-order', this.subData[0].spaconfig.spamanifest.spaShowcase.order);
     document.documentElement.style.setProperty('--spavideo-order', this.subData[0].spaconfig.spamanifest.spavideo.order);
     document.documentElement.style.setProperty('--spawelcome-order', this.subData[0].spaconfig.spamanifest.spaWelcome.order);


     //  this.spadata;

    }
   
    public isSectionActive(section: string): boolean {
      return location.href.indexOf(section) !== -1;
    }
    
    ngOnDestroy(){
      if (this.Data){
        this.Data.subscribe().unsubscribe()
      }
    }
  
}