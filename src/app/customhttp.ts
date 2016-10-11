import { Injectable } from '@angular/core';
import { Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { PubSubService } from './pubsubService';
import { LoadingService } from './shared/loading.service';
@Injectable()
export class CustomHttp extends Http {
    _loading: LoadingService
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, loading: LoadingService) {
        super(backend, defaultOptions);
        this._loading = loading;
    }
    request(url: string | Request, options ? : RequestOptionsArgs): Observable<Response> {
        console.log("good");
        return this.intercept(super.request(url, options));
    }
    get(url: string, options ? : RequestOptionsArgs): Observable < Response > {
        return this.intercept(super.get(url, options));
    }
    post(url: string, body: string, options ? : RequestOptionsArgs): Observable < Response > {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }
    put(url: string, body: string, options ? : RequestOptionsArgs): Observable < Response > {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }
    delete(url: string, options ? : RequestOptionsArgs): Observable < Response > {
        return this.intercept(super.delete(url, options));
    }
    getRequestOptionArgs(options ? : RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    }
    intercept(observable: Observable < Response > ): Observable < Response > {
        this._loading.beforeRequest.emit("beforeRequestEvent")
        observable.subscribe(null, (err) => {
                    console.error(err);
                    this._loading.afterRequest.emit("afterRequestEvent");
                }, () => {
                    console.log('complete');
                    this._loading.afterRequest.emit("afterRequestEvent");
                });
        return observable;
      
        // observable
        // .toPromise()
        // .catch(err => {
        //     console.log(err.status);
        //     return Observable.throw(err);
        // })
        // this._loading.beforeRequest.emit("beforeRequestEvent")
        // return observable.do(() => this._loading.afterRequest.emit("afterRequestEvent"));
    }
}
