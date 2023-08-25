import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as WeatherActions from './weather.actions'
import {WeatherApi} from '../../services/weather.api';
import {Weather} from '../models/weather..model';
import {of} from 'rxjs';

@Injectable()
export class WeatherEffects {
    searchCurrentWeather$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WeatherActions.searchCurrentWeather),
            switchMap((data: WeatherActions.SearchCurrentWeather) => {
                return this.weatherApi.getCurrentWeatherOfCity(data.payload).pipe(
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
                            this.updateCacheWeatherCity(currentWeather, data.payload);
                            return new WeatherActions.UpdateCurrentWeather({
                                currentWeather,
                                cityName: data.payload
                            });
                        } else {
                            localStorage.clear();
                            return new WeatherActions.SearchCurrentWeatherFail(resData.error.info);
                        }
                    }),
                    catchError(err => of(new WeatherActions.SearchCurrentWeatherFail(err.error.info))),
                );
            }),
        )
    );

    cacheCurrentWeather$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WeatherActions.cacheCurrentWeather),
            switchMap((data: WeatherActions.CacheCurrentWeather) => {
                const state = this.getLastSearchWeatherCity();
                if (state != null) {
                    return of(new WeatherActions.UpdateCurrentWeather(state));
                }
                return of();
            })
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