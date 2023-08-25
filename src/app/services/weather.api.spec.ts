import {TestBed} from '@angular/core/testing';

import {WeatherApi} from './weather.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

describe('WeatherApi', () => {
    let service: WeatherApi;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(WeatherApi);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should verify api url', () => {
        httpClient = TestBed.inject(HttpClient);
        spyOn(httpClient, 'get').and.returnValue(of({}));
        service.getCurrentWeatherOfCity('Tehran');
        expect(httpClient.get).toHaveBeenCalledWith(`http://api.weatherstack.com/current?access_key=eae90598b5f8e7d5d7ea190c0d76ed62&query=Tehran`);
    });
});
