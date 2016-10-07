import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';

import { routing } from './hero.routing'

@NgModule({
    declarations: [
        HeroesComponent, HeroListComponent, HeroDetailComponent
    ],
    imports: [CommonModule, FormsModule, routing],
    exports: [HeroesComponent],
    providers: [HeroService],
})
export class HeroModule {}
