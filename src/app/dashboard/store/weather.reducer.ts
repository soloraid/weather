import {Weather} from '../models/weather..model';
import {createReducer, on} from '@ngrx/store';
import {
    searchCurrentWeather,
    searchCurrentWeatherFail,
    updateCurrentWeather
} from './weather.actions';

const initialState: State = {
    currentWeather: null,
    cityName: null,
    errorMessage: null,
    loading: false,
};

export interface State {
    currentWeather: Partial<Weather>;
    cityName: string;
    errorMessage: string;
    loading: boolean;
}


export const weatherReducer = createReducer(
    initialState,
    on(updateCurrentWeather, (state, payload: { currentWeather: Partial<Weather>, cityName: string }) => ({
        ...state,
        currentWeather: payload.currentWeather,
        cityName: payload.cityName,
        errorMessage: null,
        loading: false,
    })),
    on(searchCurrentWeather, (state) => ({
        ...state,
        loading: true,
        errorMessage: null,
    })),
    on(searchCurrentWeatherFail, (state, payload: { error: string }) => ({
        ...state,
        currentWeather: null,
        cityName: null,
        errorMessage: payload.error,
        loading: false,
    })),
)
