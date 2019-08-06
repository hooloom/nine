import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import * as firebase from 'firebase/app';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFireStorageModule
  ],
  providers:[{ provide: FirestoreSettingsToken, useValue: {} }]
})
export class GoogleFirebase { }