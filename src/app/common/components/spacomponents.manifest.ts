
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LocalStorageService } from '../services/localstorage.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { cssInjector } from './public/spa/cssinjector/css-injector.component';
import { PipesManifest } from '../pipes/pipes.manifest';

import { ScrollTop } from './public/scroll/scroll.component';
import { SpaBody } from './public/spa/spa-body/spa-body.component';
import { SpaBodyDirective } from './public/spa/spa-body/spa-body.directive';
import { SpaCarousel } from './public/spa/spa-carousel/spa-carousel.component';
import { SpaFooter } from './public/spa/spa-footer/spa-footer.component';
import { SpaHeader } from './public/spa/spa-header/spa-header.component';
import { SpaLogin } from './public/spa/spa-login/spa-login.component';
import { SpaNewsletter } from './public/spa/spa-newsletter/spa-newsletter.component';
import { SpaPricing } from './public/spa/spa-pricing/spa-pricing.component';
import { SpaPricegrid } from './public/spa/spa-price-grid/spa-price-grid.component';
import { SpaPricingSyndicate } from './public/spa/spa-pricing-syndicate/spa-pricing-syndicate.component';
import { SpaProductlist } from './public/spa/spa-product-list/spa-product-list.component';
import { SpaShowcase } from './public/spa/spa-showcase/spa-showcase.component';
import { SpaWelcome } from './public/spa/spa-welcome/spa-welcome.component';
import { SpaVideo } from './public/spa/spa-video/spa-video.component';
import { SpaYoutubeModal } from './public/spa/spa-youtube-modal/spa-youtube-modal.component';

import { youtubePlayer } from './public/spa/youtube/player.youtube';


@NgModule({
imports:[CommonModule, NgbModule, PipesManifest, FormsModule, CarouselModule, RouterModule],
declarations:[
    cssInjector, 
    ScrollTop, 
    SpaBody, 
    SpaBodyDirective, 
    SpaCarousel, 
    SpaFooter, 
    SpaHeader,
    SpaLogin, 
    SpaNewsletter,
    SpaPricing,
    SpaPricegrid,
    SpaPricingSyndicate,
    SpaProductlist,
    SpaShowcase,
    SpaWelcome, 
    SpaYoutubeModal, 
    SpaVideo, 
    youtubePlayer],
exports:[cssInjector, ScrollTop, SpaBody, SpaBodyDirective, SpaFooter, SpaHeader, SpaLogin],
providers:[LocalStorageService, NgbActiveModal],
entryComponents:[SpaCarousel, SpaNewsletter, SpaPricing, SpaPricegrid, SpaPricingSyndicate, SpaProductlist, SpaShowcase, SpaWelcome, SpaVideo, SpaYoutubeModal, youtubePlayer]
})
export class SpaComponentsManifest { }