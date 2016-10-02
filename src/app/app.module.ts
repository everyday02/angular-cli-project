import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CrisisCenterComponent } from './crisis/crisis-center.component';
@NgModule({
    declarations: [
        AppComponent, CrisisCenterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
