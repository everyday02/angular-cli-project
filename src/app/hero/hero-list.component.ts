import { Component } from '@angular/core';

@Component({
    template: `
		<h1>hero列表</h1>
		<li routerLink="detail">hero1</li>
		<li routerLink="detail">hero2</li>
		<li routerLink="detail">hero3</li>
		<li routerLink="detail">hero4</li>
	`
})

export class HeroListComponent {}
