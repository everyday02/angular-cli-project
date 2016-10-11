import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingService } from './loading.service';
@Component({
	selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
    showLoader = false;
    _loading: LoadingService;
    constructor(public http: Http, public loading: LoadingService) {
        this._loading = loading;
    }
    ngOnInit() {
        this._loading.beforeRequest.subscribe(data => this.showLoader = true);
        this._loading.afterRequest.subscribe(data => this.showLoader = false);
    }
}
