import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisCenterComponent } from './crisis/crisis-center.component'; //非懒加载模块

export const routes: Routes = [
    { path: '', redirectTo: 'crisis', pathMatch: 'full' },
    { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' },
    { path: 'monitor', loadChildren: 'app/monitor/monitor.module#MonitorModule' },
    { path: 'crisis', component: CrisisCenterComponent },
];
// 
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
