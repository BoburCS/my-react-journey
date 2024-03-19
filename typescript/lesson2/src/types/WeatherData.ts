type WeatherData = {
    name: string;
    main: { temp: number };
    sys: { sunrise: number; sunset: number };
    weather: { description: string }[];
    wind: { speed: number };
}

export default WeatherData;
