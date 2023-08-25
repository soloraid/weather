export interface Weather {
    observation_time: string;
    temperature: number;
    weather_descriptions: string[],
    humidity: number;
    country: string;
    region: string;
    is_day: boolean;
    weather_icon: string;
}