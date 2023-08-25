import * as WeatherActions from './weather.actions';
import {weatherActions} from './weather.actions';
import {Weather} from '../models/weather..model';

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

export function weatherReducer(state: State = initialState, action: weatherActions): State {

    switch (action.type) {
        case WeatherActions.updateCurrentWeather:
            return {
                ...state,
                currentWeather: action.payload.currentWeather,
                cityName:  action.payload.cityName,
                errorMessage: null,
                loading: false,
            };
        case WeatherActions.searchCurrentWeather:
            return  {
                ...state,
                loading: true,
                errorMessage: null,
            };
        case WeatherActions.searchCurrentWeatherFail:
            return {
                ...state,
                currentWeather: null,
                cityName: null,
                errorMessage: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}