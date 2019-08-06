
import { Component} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';
import { AppRouter } from './app.router';

import { GoogleFirebase } from './firebase.google';
import { PublicDataService } from './common/services/publicdata.service';
import { LocalStorageService } from './common/services/localstorage.service';
import { DashboardManifest } from './views/dashboard/dashboard.manifest';
import { DashboardRouter } from './views/dashboard/dashboard.router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})

export class AppRoot {
title="nine";
}

@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouter,
    DashboardRouter,
    GoogleFirebase,
    DashboardManifest
  ],
  providers: [PublicDataService, LocalStorageService],
  bootstrap: [AppRoot]
})
export class RootManifest { }