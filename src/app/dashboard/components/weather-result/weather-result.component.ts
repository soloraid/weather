import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Weather} from '../../models/weather..model';

@Component({
    selector: 'app-weather-result',
    templateUrl: './weather-result.component.html',
    styleUrls: ['./weather-result.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherResultComponent {
    _weather: Partial<Weather>;
    image: string = '';
    weatherIcon = '';

    get weather(): Partial<Weather> {
        return this._weather;
    }

    @Input() set weather(weather: Partial<Weather>) {
        if(weather) {
            const weatherCondition = weather.weather_descriptions[0].replaceAll(' ', '-').toLowerCase();
            this.weatherIcon = (weather.is_day ? 'day' : 'night') +
                weather.weather_descriptions[0].replaceAll(' ', '');
            this.image = `assets/weathers/weather-${weatherCondition}-moment-${weather.is_day ? 'day' : 'night'}.png`
        }
        this._weather = weather;
    };
}
