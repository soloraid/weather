import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideMockStore, MockStore} from '@ngrx/store/testing';

import {DashboardComponent} from './dashboard.component';
import * as WeatherActions from '../../store/weather.actions';
import {Weather} from '../../models/weather..model';
import {SearchComponent} from '../search/search.component';
import {IconsComponent} from '../../../shared/icons/icons.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    const element = (selector: string) => fixture.nativeElement.querySelector(selector);
    let store: MockStore;
    const initialState = {
        dashboardWeather: {
            currentWeather: {
                temperature: 10,
                is_day: false,
                weather_descriptions: ['Clear'],
                humidity: 12,
                region: 'Texas',
                country: 'US',
                observation_time: '10:12 Am',
            },
            errorMessage: '',
            loading: false,
        },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashboardComponent, SearchComponent, IconsComponent],
            providers: [provideMockStore({initialState})],
        }).compileComponents();
    });

    it('should show search-input', () => {
        component.loadingData = false;
        fixture.detectChanges();
        const value = element('[data-test="search-input"]');
        expect(value).toBeTruthy();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(MockStore);
        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should dispatch SearchCurrentWeather action on searchCity call', () => {
        const cityName = 'Tehran';
        component.searchCity(cityName);
        fixture.detectChanges();
        expect(store.dispatch).toHaveBeenCalledWith(
            new WeatherActions.SearchCurrentWeather(cityName)
        );
    });

    it('should update properties on store select', () => {
        const mockWeather: Partial<Weather> = {
            temperature: 10,
            is_day: false,
            weather_descriptions: ['Clear'],
            humidity: 12,
            region: 'Tehran',
            country: 'Iran',
            observation_time: '10:12 Am',
        };
        const mockState = {
            dashboardWeather: {
                currentWeather: mockWeather,
                cityName: mockWeather.region,
                errorMessage: '',
                loading: false,
            },
        };
        store.setState(mockState);

        fixture.detectChanges();
        expect(component.weather).toEqual(mockWeather);
        expect(component.hasResult).toBe(true);
        expect(component.errorMessage).toBe('');
        expect(component.loadingData).toBe(false);
    });

    it('should dispatch CacheCurrentWeather action on ngOnInit', () => {
        component.ngOnInit();
        expect(store.dispatch).toHaveBeenCalledWith(
            new WeatherActions.CacheCurrentWeather()
        );
    });
});