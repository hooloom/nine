
// tslint:disable-next-line:max-line-length
import { Directive, OnInit, ViewContainerRef, AfterViewInit, OnDestroy, ComponentFactoryResolver, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LocalStorageService } from './../../../../services/localstorage.service';
import { SpaCarousel } from './../spa-carousel/spa-carousel.component';
import { SpaNewsletter } from './../spa-newsletter/spa-newsletter.component';
import { SpaPricing } from './../spa-pricing/spa-pricing.component';
import { SpaPricegrid } from './../spa-price-grid/spa-price-grid.component';
import { SpaPricingSyndicate } from './../spa-pricing-syndicate/spa-pricing-syndicate.component';
import { SpaProductlist } from './../spa-product-list/spa-product-list.component';
import { SpaShowcase } from './../spa-showcase/spa-showcase.component';
import { SpaVideo } from '../spa-video/spa-video.component';
import { SpaWelcome } from './../spa-welcome/spa-welcome.component';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[spabody]'
})
export class SpaBodyDirective implements OnInit, OnDestroy, AfterViewInit {
  // @Input() spabody: any; 
  components;

  private elRef: any;
  Data: Observable<any>;

  readonly templateMapper = {
    spaCarousel :SpaCarousel,
    spaNewsletter: SpaNewsletter,
    spaPricegrid: SpaPricegrid,
    spaPricing: SpaPricing,
    spaPricingSyndicate: SpaPricingSyndicate,
    spaProductlist: SpaProductlist,
    spaShowcase: SpaShowcase,
    spaVideo: SpaVideo,
    spaWelcome: SpaWelcome
  };

  constructor(
    public viewContainerRef: ViewContainerRef,
    private factory: ComponentFactoryResolver,
    private router: Router, 
    private localstore: LocalStorageService
  ) {
    this.elRef = viewContainerRef;
    router.events.subscribe((event) => {
      ///original plan for navigation end of route - leaving in place but not using
      if (event instanceof NavigationEnd) {
        this.Data.subscribe(data => {
          if (data) {
            this.loadComponent(data);
          }
        });
      }
    });
  }

  ngOnInit(): void {
   
   
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    this.elRef.clear(); 
      if (this.Data){
        this.Data.subscribe().unsubscribe()
    }
  }

  ngAfterViewInit() {
    this.Data=this.localstore.select(document.location.hostname, {})
    this.Data.subscribe(data => {
      if (data) {
        this.loadComponent(data)
      }
    });
  }


  loadComponent(data: any) {
    this.elRef.clear();
    ///get obj from firestore
    let obj=(data[0].spaconfig.spamanifest)
    /// create an array
    let componentArr = [];
    Object.keys(obj).forEach(key => {
      ///loop through  for each
        componentArr.push({
          ///create new array object
            value: obj[key],
            key: key
        });
    });


    const components: Array<any> = componentArr;

    const orgdata = componentArr[0];
    ///uses the new array
    if (components) {
      
      const filtered = from(components).pipe(
       
        filter(component => {
          if (
            // console.log(component),
            ///filters component by published or not
            //// could use other variables here if wanted
            component.value.published === true) {
              
              return component;
          } 
        })
      )
  //  filtered.subscribe(data=>console.log('filtered',data))
      filtered.subscribe(
        (component) => {
        const componentFactory = this.factory.resolveComponentFactory(this.getComponentByAlias(component.value.name));
        const componentRef = this.elRef.createComponent(componentFactory);
        (<any>componentRef.instance).data = orgdata;
      });
      
    }

  }

  private getComponentByAlias(alias: string) {
    return this.templateMapper[alias];
  }

}