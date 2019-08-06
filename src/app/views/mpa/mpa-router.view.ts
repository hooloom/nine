
import { LocalStorageService } from './../../common/services/localstorage.service';
import { Component, OnInit} from "@angular/core";

@Component({
    selector: 'mpa-view-router',
    templateUrl: './mpa.view.html',
    styleUrls: ['./mpa.view.css']

})
export class MpaViewRouter implements OnInit {
    storename=document.location.hostname;
    data;
    constructor(private sub:LocalStorageService) { }
  
    ngOnInit() {
        console.log(this.storename)
     this.data=this.sub.select(this.storename);
    }
}