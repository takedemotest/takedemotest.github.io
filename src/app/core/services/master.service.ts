import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class MasterService {

    counter$:Subject<number> = new Subject<number>;
    constructor(){

    }

}