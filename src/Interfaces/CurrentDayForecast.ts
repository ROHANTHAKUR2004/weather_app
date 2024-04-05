export default interface CurrentDayForecast{
    uv : number,
    wind_kmph : number,
    humidity : number,
    vis_km : number,
    aqi : number,
    sunrise : string,
    sunset : string,
    temp_c : number,
    temp_f : number,
    condition : string,
    isDay : number,
    chance_of_rain : number,
    icon : string
}