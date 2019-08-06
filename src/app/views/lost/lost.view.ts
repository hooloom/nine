import { LocalStorageService } from './../../common/services/localstorage.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'lost-view',
    templateUrl: './lost.view.html',
    styleUrls: ['./lost.view.css']

})
///view if nothing else matches
export class LostView implements OnInit{
    Data: any;
    constructor(private localstore:LocalStorageService) { }
  
    ngOnInit() {
        this.Data=this.localstore.select(document.location.hostname,{})
    //  this.data=this.sub.select(this.storename);
    }
   
}