import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorComponent } from './monitor.component';
import { MonitorListComponent } from './monitor-list.component';

import { routing } from './monitor.routing'

@NgModule({
    declarations: [
        MonitorComponent, MonitorListComponent
    ],
    imports: [CommonModule, routing],
    exports: [MonitorComponent],
    providers: [],
})
export class MonitorModule {}
