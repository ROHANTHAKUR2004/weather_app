import DayForecast from "./DayForecast";
import CurrentDayForecast from "./CurrentDayForecast";
import HoursForecast from "./hoursfroecast";

export default interface ForecastData{
    location : {localtime : string , country: string , region : string, name : string},
    dayforecast :  DayForecast[],
    currentData : CurrentDayForecast,
    hourforecast : HoursForecast[]
  
}