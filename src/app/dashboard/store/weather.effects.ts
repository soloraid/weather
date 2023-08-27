import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {WeatherApi} from '../../services/weather.api';
import {Weather} from '../models/weather..model';
import {of} from 'rxjs';
import {
    cacheCurrentWeather,
    searchCurrentWeather,
    searchCurrentWeatherFail,
    updateCurrentWeather
} from './weather.actions';

@Injectable()
export class WeatherEffects {
    searchCurrentWeather$ = createEffect(() =>
        this.actions$.pipe(
            ofType(searchCurrentWeather),
            switchMap(data => {
                return this.weatherApi.getCurrentWeatherOfCity(data.cityName).pipe(
                    map(resData => {
                        if (!resData.error) {
                            const currentWeather: Partial<Weather> = {
                                observation_time: resData.current?.observation_time,
                                country: resData.location.country,
                                region: resData.location.name,
                                weather_descriptions: resData.current.weather_descriptions,
                                humidity: resData.current.humidity,
                                temperature: resData.current.temperature,
                                is_day: resData.current.is_day !== 'no'
                            }
                            this.updateCacheWeatherCity(currentWeather, data.cityName);
                            return updateCurrentWeather({currentWeather, cityName: data.cityName});
                        } else {
                            localStorage.clear();
                            return searchCurrentWeatherFail({error: resData.error.info});
                        }
                    }),
                    catchError(err => of(searchCurrentWeatherFail({error: err.error.info}))),
                );
            }),
        )
    );

    cacheCurrentWeather$ = createEffect(() =>
        this.actions$.pipe(
            ofType(cacheCurrentWeather),
            switchMap( () => {
                const state = this.getLastSearchWeatherCity();
                if (state != null) {
                    return of(updateCurrentWeather({currentWeather: state.currentWeather, cityName: state.cityName}));
                }
                return of();
            }),
        ));


    constructor(private weatherApi: WeatherApi, private actions$: Actions) {
    }


    getLastSearchWeatherCity(): { currentWeather: Partial<Weather>; cityName: string; } {
        const startTime = JSON.parse(localStorage.getItem('startTime'));
        const currentTime = new Date().getTime();
        if(startTime != null && currentTime - startTime < 60000) {
            const currentWeather = JSON.parse(localStorage.getItem('currentWeather'));
            const cityName = JSON.parse(localStorage.getItem('cityName'));
            return {
                currentWeather,
                cityName
            };
        }
        localStorage.clear();
        return null;
    }

    updateCacheWeatherCity(currentWeather: Partial<Weather>, cityName: string): void {
        localStorage.setItem('currentWeather', JSON.stringify(currentWeather));
        localStorage.setItem('cityName', JSON.stringify(cityName));
        localStorage.setItem('startTime', JSON.stringify(new Date().getTime()));
    }
}