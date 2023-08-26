import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SearchComponent} from './components/search/search.component';
import {WeatherResultComponent} from './components/weather-result/weather-result.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../app.module';


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
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ]
})
export class DashboardModule {
}
