import * as dashboardWeather from '../dashboard/store/weather.reducer'
import {ActionReducerMap} from '@ngrx/store';
import {weatherActions} from '../dashboard/store/weather.actions';

export interface AppState {
    dashboardWeather: dashboardWeather.State;
}

export const  appReducer: ActionReducerMap<AppState, weatherActions> = {
    dashboardWeather: dashboardWeather.weatherReducer,
}