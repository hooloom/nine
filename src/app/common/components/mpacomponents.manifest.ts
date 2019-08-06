import { PipesManifest } from './../pipes/pipes.manifest';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LocalStorageService } from '../services/localstorage.service';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    imports:[CommonModule, NgbModule, PipesManifest, FormsModule, CarouselModule, RouterModule],
    declarations:[],
    exports:[],
    entryComponents:[],
    providers:[LocalStorageService, NgbActiveModal]
   })
   export class MpaComponentsManifest { }
