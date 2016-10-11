import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions, Response, BaseResponseOptions, Headers, ResponseOptions, BaseRequestOptions } from '@angular/http';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroData } from './hero/hero-data';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { CrisisCenterComponent } from './crisis/crisis-center.component';
import { MapComponent } from './map/map.component';
import {CustomHttp} from './customhttp';
import { MapService } from './map/map.service';
import {PubSubService} from './pubsubService'
@Injectable()
export class MyOptions extends RequestOptions {
    constructor() {
        super({
            headers: new Headers({
                'Content-type': 'application/xml'
            })
        });
    }
}
@Injectable()
export class MyResponse extends ResponseOptions {
    constructor() {
        // console.log(responseOptions);
        super({});
    }
}
class CustomRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Authorization', 'my-token');
        console.log(this);
    }
}
class CustomResponseOptions extends BaseResponseOptions {
    constructor() {
        super();
        console.log(this.status);
    }
}
@NgModule({
    declarations: [
        AppComponent, CrisisCenterComponent, MapComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // InMemoryWebApiModule.forRoot(HeroData),
        routing
    ],
    providers: [
        MapService,
        PubSubService, 
        {
            provide: Http,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, pubsub: PubSubService) =>
                  new CustomHttp(backend, defaultOptions, pubsub),
              deps: [ XHRBackend, RequestOptions, PubSubService ]
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
// provide: RequestOptions, useClass: MyOptions
// {
//         provide: CustomHttp,
//         useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
//             return new CustomHttp(backend, defaultOptions);
//         },
//         deps: [XHRBackend, RequestOptions]
//     },
// {
//       provide: Http,
//       useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, pubsub: PSService) =>
//             new InterceptHttp(backend, defaultOptions, pubsub),
//         deps: [ XHRBackend, RequestOptions, PSService ]
//     }