import {Injectable} from '@angular/core';
import {Subject } from 'rxjs/Subject';

class RequestEventEmitter extends Subject<String>{
    constructor() {
        super();
    }
    emit(value) { super.next(value); }
}

class ResponseEventEmitter extends Subject<String>{
    constructor() {
        super();
    }
    emit(value) { super.next(value); }
}

@Injectable()
export class LoadingService{
   beforeRequest:RequestEventEmitter;
   afterRequest:ResponseEventEmitter;
   constructor(){
       this.beforeRequest = new RequestEventEmitter();
       this.afterRequest = new ResponseEventEmitter();
   }
}