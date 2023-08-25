import {Action} from '@ngrx/store';
import {Weather} from '../models/weather..model';

export const updateCurrentWeather = '[Dashboard Weather] Update Current Weather';
export const cacheCurrentWeather = '[Dashboard Weather] cache Current Weather';
export const searchCurrentWeather = '[Dashboard Weather] Search Current Weather';
export const searchCurrentWeatherFail = '[Dashboard Weather] Search Current Weather Fail';

export class UpdateCurrentWeather implements Action {
    readonly type = updateCurrentWeather;

    constructor(public payload: { currentWeather: Partial<Weather>, cityName: string }) {
    }
}

export class SearchCurrentWeather implements Action {
    readonly type = searchCurrentWeather;

    constructor(public payload: string) {
    }
}

export class SearchCurrentWeatherFail implements Action {
    readonly type = searchCurrentWeatherFail;

    constructor(public payload: string) {
    }
}

export class CacheCurrentWeather implements Action {
    readonly type = cacheCurrentWeather;
}

export type weatherActions = UpdateCurrentWeather | SearchCurrentWeather | SearchCurrentWeatherFail | CacheCurrentWeather;