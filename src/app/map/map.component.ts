import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MapService } from './map.service';
import { PubSubService } from '../shared/pubsub.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
declare var BMap;

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

	users;

	  _pubsub: PubSubService;
	  
	  constructor(public http:Http, pubsub: PubSubService) {
	  	this._pubsub = pubsub;
	  }
	   ngOnInit() {

	     
	    this.reload();
	    
	  }
	  // Declaring the variable for binding with initial value
	  yourName: string = 'Dynamic Request Loader';
	  showToast() {
                        this._pubsub.errorToast.emit("404 ErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorError");
	  	
	  }
	  reload() {
	  	
	      this.http.request('http://jsonplaceholder.typicode.com/userss')

	        .map(res => res.json())
	        .subscribe(
	          data => { 
	          	this.users = data;
	          	console.log(data);
	          },
	          err => console.log(err),
	          () => console.log('Get Users Complete')
	        );  

	  }
	  deleteData() {
	  	let req = {
	  		name: "jiangbo"
	  	}
	  	this._pubsub.confirm.subscribe(data => {
	  		alert(data);
	  	})
	  	this._pubsub.showPupup.emit("value");
	  	this.http.delete('http://jsonplaceholder.typicode.com/userss', {body: JSON.stringify(req)})

	        .map(res => res.json())
	        .subscribe(
	          data => { 
	          	this.users = data;
	          	console.log(data);
	          },
	          err => console.log(err),
	          () => console.log('Get Users Complete')
	        );  
	  }


















	// private heroes;
	// constructor(private heroService: MapService, private router: Router) {}
	// getHeroes(): void {
	//     this.heroService.getHeroes().then(heroes => {
	//     	this.heroes = heroes;
	//     	console.log(this.heroes)
	//     });
	// }
	// getMap(): void {
	// 	this.getHeroes();
	// }

	// ngOnInit(): void {
	// 	this.getHeroes();
	// 	this.initMap();
	// 	this.loadStations();
	// }


	// info: any = {
	// 	zoomLevel: 1
	// };

	// initMap(): void {

	// 	let point = new BMap.Point(121.480776, 31.235903);
	// 	let map = new BMap.Map("map", {
	// 	    enableMapClick: true
	// 	});
	// 	map.centerAndZoom(point, this.info.zoomLevel);
	// 	map.enableScrollWheelZoom();
 //        map.enableContinuousZoom();

 //        map.addEventListener('click', (e) => {
 //        	this.info.zoomLevel = map.getZoom() + 1;
 //    		map.centerAndZoom(new BMap.Point(e.point), this.info.zoomLevel);
 //    		this.loadStations();
 //        });

 //        map.addEventListener('zoomend', () => {
 //        	this.info.zoomLevel = map.getZoom();
 //        	this.onZoomEnd(map);
 //        });
	// }

	// onZoomEnd(map): void {
	// 	if(this.info.zoomLevel < 11) {
	// 		this.info.level = 1;
	// 		map.clearOverlays();
	// 	} else if(this.info.zoomLevel < 13) {
	// 		this.info.level = 2;
 //            map.clearOverlays();
	// 	} else if(this.info.zoomLevel < 15) {
	// 		this.info.level = 3;
 //            map.clearOverlays();
	// 	} else {
	// 		this.info.level = 4;
 //            map.clearOverlays();
	// 	}
	// }

	// loadStations(): void {
	// 	let condition = {
	// 		level: 1,
	// 	};
	// }

}
