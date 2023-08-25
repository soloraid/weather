import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WeatherApiModel} from '../shared/weather-api.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherApi {
  baseUrl = environment.baseUrl;
  appId = environment.appId;

  constructor(private http: HttpClient) { }

  getCurrentWeatherOfCity(value: string): Observable<any> {
    return this.http.get<WeatherApiModel>(`${this.baseUrl}/current?access_key=${this.appId}&query=${value}`)
  }
}
