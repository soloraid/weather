import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SearchComponent} from './components/search/search.component';
import {WeatherResultComponent} from './components/weather-result/weather-result.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [
        SearchComponent,
        WeatherResultComponent,
        DashboardComponent,
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule,
        CommonModule,
    ]
})
export class DashboardModule {
}
