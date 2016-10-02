import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list.component'
import { HeroDetailComponent } from './hero-detail.component'

import { routing } from './hero.routing'

@NgModule({
    declarations: [
        HeroComponent, HeroListComponent, HeroDetailComponent
    ],
    imports: [CommonModule, routing],
    exports: [HeroComponent],
    providers: [],
})
export class HeroModule {}
