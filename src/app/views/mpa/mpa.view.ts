import { LocalStorageService } from './../../common/services/localstorage.service';

import { Component, OnInit, Input} from "@angular/core";
import { Observable } from 'rxjs';
@Component({
    selector: 'mpa-view',
    templateUrl: './mpa.view.html',
    styleUrls: ['./mpa.view.css']

})
export class mpaView implements OnInit {
//   @Input() mpadata: any;
  Data: Observable<any>;
  subData;
    constructor(public localstore: LocalStorageService) { }
  
    ngOnInit() {
        
        this.Data=this.localstore.select(document.location.hostname, {})
        this.Data.subscribe(data=>this.subData=data);
        // this.Data=this.mpadata
     
    }

  
}
