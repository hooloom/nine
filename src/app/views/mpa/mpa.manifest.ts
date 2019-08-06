import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MpaViewRouter } from './mpa-router.view';
import { mpaView } from './mpa.view';
import { NgModule } from '@angular/core';

import { MpaComponentsManifest } from '../../common/components/mpacomponents.manifest';
@NgModule({
  declarations: [mpaView, MpaViewRouter],
  imports: [
    CommonModule,
    FormsModule,
    MpaComponentsManifest,
    NgbModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[mpaView, MpaViewRouter]
})
export class MpaManifest {}

