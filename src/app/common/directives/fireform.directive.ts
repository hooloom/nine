import { Directive, Input, Output, EventEmitter, HostListener, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { tap,take, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs'; 

// Possible states between Reactive Form <---> Firestore
export type SyncState = 'loading' | 'modified' | 'synced' | 'error';

export interface FireFormConfig {
  preload: boolean;
  autosave: boolean;
  autosaveDebounce: number;
  destructive: boolean;
  realtime: boolean
}

@Directive({
  selector: '[fireForm]'
})
export class FireFormDirective implements AfterViewInit, OnDestroy {
  
  // Inputs
  @Input() path: string;
  @Input() formGroup: FormGroup;
  @Input() opts?: Partial<FireFormConfig>;

  // Outputs
  @Output() sync          = new EventEmitter();
  @Output() error         = new EventEmitter(); 


  // Internal State
  private _config: FireFormConfig = {
    preload: true,
    autosave: true,
    autosaveDebounce: 2500,
    destructive: false,
    realtime: false,
  }

  private _sync: SyncState;

  private _docRef: AngularFirestoreDocument<any>;

  // Subscriptions
  private autoSaveSub: Subscription;
  private docSub: Subscription;


  constructor(private afs: AngularFirestore) { 
    this._config = { ...this._config, ...this.opts } 
  }

  @HostListener('ngSubmit', ['$event']) onSubmit(e) {
    this.setDoc();
  }	
  
  ngAfterViewInit() {
    this._docRef = this.getDoc(this.path);
    
    if (this._config.preload) {
      this.initData()
    }

    if (this._config.autosave) {
      this.autoSave()
    }

  }

  private initData(): void {
    this.syncState = 'loading';
    this.docSub = this._docRef.valueChanges()
    
    .pipe(
      take(this._config.realtime ? Infinity : 1 ),
      tap(doc => { 
        if (doc) { 
          this.formGroup.patchValue(doc);
        }
        this.syncState = 'synced';
      })
    )
    .subscribe()
  }

  private autoSave() {
    this.autoSaveSub = this.formGroup
    
    .valueChanges.pipe(
      tap(change => {
        this.syncState = 'modified';
      }),
      debounceTime(this._config.autosaveDebounce),
      tap(change => {
        if (this.formGroup.valid && this._sync === 'modified') {
          this.setDoc();
        }
      }),
    )
    .subscribe()
  }



  // Returns a doc or col based on string path
  // return AngularFirestoreCollection<any> | AngularFirestoreDocument<any> 
  getDoc(path: string): any { 
    if (path[path.length - 1] === '/') {
      path = path.slice(0, -1)
    }

    if (path.split('/').length % 2) {
      return this.afs.doc(`${path}/${this.afs.createId()}`);
    } else {
      return this.afs.doc(path);
    }
  }

  async setDoc() {
    try {
      await this._docRef.set(this.formGroup.value, { merge: !this._config.destructive })
      this.syncState = 'synced';
    } catch (err) {
      this.error.emit(err);
      this.syncState = 'error';
    }

  }


  set syncState(state: SyncState) {
    this._sync = state;
    this.sync.emit(this._sync)
  }



  ngOnDestroy() {
    this.autoSaveSub.unsubscribe();
    this.docSub.unsubscribe();
  }
    

}
