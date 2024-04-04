import TempCard from "../TempCard";
import REduxstate from "../../Interfaces/REduxState";
import { useSelector } from "react-redux";
export default function WeekRow(){

    const dayForecast = useSelector((state : REduxstate) => state.forecast.data.dayforecast );
   
    const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
   
   
   
   
    return(
       <div className="w-full px-12 py-2 flex gap-5  flex-wrap">
        {dayForecast && dayForecast.map((forecast) =>
            <TempCard  title={weekdays[(new Date(forecast.date)).getDay()]} temperature={forecast.avgtemp_c.toString()} image={forecast.icon}/>
        )}
          
           
       </div>
    )
}