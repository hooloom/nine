import { LocalStorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, shareReplay, take,tap } from 'rxjs/operators';
import { Location} from '@angular/common';

@Injectable({
    providedIn: 'root'
  })
  export class PublicDataService {
  
    constructor(private afs: AngularFirestore, private location: Location) { 
  
    }
    identifier=document.location.hostname;
    publicdata;
loadPublicData() {
    
    this.publicdata = this.afs.collection(`${this.identifier}`, ref => {     
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.where('id', '==', "public");
      return query; 
    }).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
     
          return { id, ...data };
        });
      })
    ), 
    shareReplay(1) 
    // ,  
    // tap(data => {
    //     if (data) {
    //       console.log('called')
    //         sessionStorage.setItem(document.location.hostname, JSON.stringify(data));
    //         console.log(data)
    //     }
    //     }
    // )
    return this.publicdata;
  
  
  }
}