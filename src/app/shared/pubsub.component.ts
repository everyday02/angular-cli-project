import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { PubSubService } from './pubsub.service';
@Component({
    selector: 'app-pubsub',
    templateUrl: './pubsub.component.html',
    styleUrls: ['./pubsub.component.css']
})
export class PubSubComponent {
    showloading = false;
    showPupub = false;
    showSuccessToast = false;
    showErrorToast = false;
    errorValue: any = "error";
    successValue: any = "success";
    _pubsub: PubSubService;
    constructor(public http: Http, public pubsub: PubSubService) {
        this._pubsub = pubsub;
    }
    cancel() {
            this.showPupub = false;
    }
    confirm() {
            this.showPupub = false;
            this._pubsub.confirm.emit("confirm");
    }
    ngOnInit() {
        
        this._pubsub.beforeRequest.subscribe(data => {
            console.log(data);
            this.showloading = true;
        });
        this._pubsub.afterRequest.subscribe(data => {
            console.log(data);
            this.showloading = false;
        });
        this._pubsub.errorToast.subscribe(data => {
            console.log(data);
            this.showErrorToast = true;
            this.errorValue = data;
            let that = this;
            setTimeout(function() {
                that.showErrorToast = false;
            }, 2000);
        });
        this._pubsub.successToast.subscribe(data => {
            console.log(data);
            this.showSuccessToast = true;
            this.successValue = data;
            let that = this;
            setTimeout(function() {
                that.showSuccessToast = false;
            }, 2000);

        });
        this._pubsub.showPupup.subscribe(data => {
            this.showPupub = true;
            console.log(data);
        });
        this._pubsub.hidePupup.subscribe(data => {
            console.log(data);
            this.showPupub = false;
        });
    }
}
