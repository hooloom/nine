import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpaView } from './spa.view';
import { SpaComponentsManifest } from '../../common/components/spacomponents.manifest';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SpaView],
  imports: [
    CommonModule,
    FormsModule,
    SpaComponentsManifest,
    NgbModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[SpaView]
})
export class SpaManifest {}