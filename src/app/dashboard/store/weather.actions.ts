import {createAction, props} from '@ngrx/store';
import {Weather} from '../models/weather..model';

export const updateCurrentWeather = createAction('[Dashboard Weather] Update Current Weather', props<{ currentWeather: Partial<Weather>, cityName: string }>());
export const cacheCurrentWeather = createAction('[Dashboard Weather] cache Current Weather');
export const searchCurrentWeather = createAction('[Dashboard Weather] Search Current Weather', props<{cityName: string}>());
export const searchCurrentWeatherFail = createAction('[Dashboard Weather] Search Current Weather Fail', props<{error: string}>());