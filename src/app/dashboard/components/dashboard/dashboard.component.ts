import {Component, OnDestroy, OnInit} from '@angular/core';
import {Weather} from '../../models/weather..model';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import * as WeatherActions from '../../store/weather.actions';
import * as fromApp from '../../../store/app.reducer'

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
    subscription: Subscription;
    constructor(private store: Store<fromApp.AppState>) {
    }
    searchCity(cityName: string): void {
        this.loadingData = true;
        this.store.dispatch(new WeatherActions.SearchCurrentWeather(cityName));
    }

    ngOnInit(): void {
        this.store.dispatch(new WeatherActions.CacheCurrentWeather());
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
