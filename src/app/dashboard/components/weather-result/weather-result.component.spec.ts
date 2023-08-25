import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherResultComponent} from './weather-result.component';
import {IconsComponent} from '../../../shared/icons/icons.component';

describe('WeatherResultComponent', () => {
    let component: WeatherResultComponent;
    let fixture: ComponentFixture<WeatherResultComponent>;
    const element = (selector: string) => fixture.nativeElement.querySelector(selector);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WeatherResultComponent, IconsComponent]
        });
        fixture = TestBed.createComponent(WeatherResultComponent);
        component = fixture.componentInstance;
        component.weather = {
            temperature: 10,
            is_day: false,
            weather_descriptions: ['Clear'],
            humidity: 12,
            region: 'Texas',
            country: 'US',
            observation_time: '10:12 Am',
        };
        fixture.detectChanges();
    });

    it('should show country-region', () => {
        const value = element('[data-test="county-region"]')
        expect(value).toBeTruthy();
    });

    it('should show description-weather', () => {
        const value = element('[data-test="description-weather"]')
        expect(value).toBeTruthy();
    });

    it('should show temperature', () => {
        const value = element('[data-test="temperature"]')
        expect(value).toBeTruthy();
    });

    it('should show humidity', () => {
        const value = element('[data-test="humidity"]')
        expect(value).toBeTruthy();
    });
});
