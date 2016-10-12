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
        return this.intercept(super.put(url, this.getRequestOptionArgs(options)));
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
        if (status === 0) {
            this._pubsub.errorToast.emit("请求响应错误，请检查网络");
        } else if (status === 404) {
            this._pubsub.errorToast.emit("请求链接不存在，请联系管理员");
        } else if (status === 500) {
            this._pubsub.errorToast.emit("服务器出错，请稍后再试");
        } else {
            this._pubsub.errorToast.emit("未知错误，请检查网络");
        }
    }
}
