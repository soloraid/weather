import {Component, OnDestroy, OnInit} from '@angular/core';
import {Weather} from '../../models/weather..model';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import * as fromApp from '../../../store/app.reducer'
import {TranslateService} from '@ngx-translate/core';
import {cacheCurrentWeather, searchCurrentWeather} from '../../store/weather.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy{
    hasResult = false;
    loadingData = false;
    weather: Partial<Weather>;
    errorMessage: string;
    currentLanguage = 'en';
    subscription: Subscription;
    constructor(private store: Store<fromApp.AppState>, private translate: TranslateService) {
        this.translate.setDefaultLang('en');
    }

    changeLanguage(): void {
        if (this.currentLanguage == 'en') {
            this.translate.use('de');
            this.currentLanguage = 'de';
        } else {
            this.translate.use('en');
            this.currentLanguage = 'en';
        }
    }
    searchCity(cityName: string): void {
        this.loadingData = true;
        this.store.dispatch(searchCurrentWeather({cityName}));
    }

    ngOnInit(): void {
        this.store.dispatch(cacheCurrentWeather());
        this.subscription = this.store.select('dashboardWeather').subscribe(data => {
            this.weather = data.currentWeather;
            this.hasResult = data.currentWeather != null;
            this.errorMessage = data.errorMessage;
            this.loadingData = data.loading;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
