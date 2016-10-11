import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Injectable()
export class MapService {
    // private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'http://115.29.37.165:18982/api/v1/util/dict/search'; // URL to web api 此处应为hero-data.ts里面的变量heroes
    constructor(private http: Http) {}
    getHeroes(): Promise < any > {
        let req = {
            limit: 10,
            nologin: 999,
            query: "站",
            type: "stationgroup"
        };
        return this.http.post(this.heroesUrl, req).toPromise().then(response => {
            console.log(response);
            console.log(response.json().data)
            return response.json().data;
        }).catch(this.handleError);
    }
    private handleError(error: any): Promise < any > {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
