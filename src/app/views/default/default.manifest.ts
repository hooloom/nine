import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { DefaultView } from './default.view';
import { SpaManifest } from './../spa/spa.manifest';
import { MpaManifest } from './../mpa/mpa.manifest';


const defaultroutes: Routes = [
  {
    path: '', component: DefaultView
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SpaManifest,
    MpaManifest,
    RouterModule.forChild(defaultroutes)
    
  ],
  declarations: [DefaultView, ],
  exports:[DefaultView, RouterModule]
})
export class DefaultManifest {}