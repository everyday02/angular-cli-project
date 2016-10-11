import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/empty";
import { Observable,  } from 'rxjs/Observable';
@Injectable()
export class CustomHttp extends Http {
    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
        console.log('super test');
        super(_backend, _defaultOptions);
    }
    request(url: string | Request, options ? : RequestOptionsArgs): Observable < Response > {
        console.log('test');
        return super.request(url, options);
    }
    get(url: string, options ? : RequestOptionsArgs): Observable < Response > {
        console.log('test');
        return super.get(url, options);
    }
}

 