import { Injectable } from '@angular/core';
import { Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { PubSubService } from './shared/pubsub.service';
@Injectable()
export class CustomHttp extends Http {
    _pubsub: PubSubService;
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, pubsub: PubSubService) {
        super(backend, defaultOptions);
        this._pubsub = pubsub;
    }
    request(url: string | Request, options ? : RequestOptionsArgs): Observable < Response > {
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
        var observable = super.get(url, options);
        console.log(options)
        // this._pubsub.showPupup.emit("确认要删除吗？");
        // observable.subscribe(null, (err) => {
        //     console.log('err');
        //     // this._pubsub.afterRequest.emit("afterRequestEvent");
        //     this.handleError(err.status);
        // }, () => {
        //     console.log('complete');
        //     this._pubsub.afterRequest.emit("afterRequestEvent");
        // });
        return observable;
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
        this._pubsub.beforeRequest.emit("beforeRequestEvent")
        observable.subscribe(null, (err) => {
            console.log('err');
            this._pubsub.afterRequest.emit("afterRequestEvent");
            this.handleError(err.status);
        }, () => {
            console.log('complete');
            this._pubsub.afterRequest.emit("afterRequestEvent");
        });
        return observable;
    }
    handleError(status) {
        if(status === 404) {
            this._pubsub.errorToast.emit("404 Error");
        }
    }
}
