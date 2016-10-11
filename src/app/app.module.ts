import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroData } from './hero/hero-data';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { CrisisCenterComponent } from './crisis/crisis-center.component';
import { MapComponent } from './map/map.component';
import { CustomHttp } from './customhttp';
import { MapService } from './map/map.service';
import { PubSubService } from './pubsubService';
import { LoadingService } from './shared/loading.service';
import { LoadingComponent } from './shared/loading.component';
@NgModule({
    declarations: [
        AppComponent, CrisisCenterComponent, MapComponent, LoadingComponent
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
        LoadingService, {
            provide: Http,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, loading: LoadingService) => new CustomHttp(backend, defaultOptions, loading),
            deps: [XHRBackend, RequestOptions, LoadingService]
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
