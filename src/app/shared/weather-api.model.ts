import {Weather} from '../dashboard/models/weather..model';

export interface WeatherApiModel {
    request: any;
    location: any;
    current: any;
}