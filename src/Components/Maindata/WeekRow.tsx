import TempCard from "../TempCard";
import REduxstate from "../../Interfaces/REduxState";
import { useSelector } from "react-redux";
import { useState } from "react";

const WeekRow = () => {
    const dayForecast = useSelector((state : REduxstate) => state.forecast.data.dayforecast);
    const hourdata = useSelector((state : REduxstate) => state.forecast.data.hourforecast);
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentHour = new Date().getHours();


    const [showHourData, setShowHourData] = useState(false); 

    const handleClickToday = () => {
        setShowHourData(true); 
    };

    const handleClickWeek = () => {
        setShowHourData(false); 
    };

    return (
        <>
            <div className="flex justify-between items-center w-full px-12 py-2">
                <div className="flex items-center justify-center text-xl font-semibold">
                    <div className={`mr-4 text-secondary ${showHourData ? '' : 'font-bold'}`} onClick={handleClickToday}>
                        Today 
                    </div>
                    <div className={`ml-4 text-primary ${showHourData ? 'font-bold' : ''}`} onClick={handleClickWeek}>
                        Week
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="mr-8 border rounded-[100%] bg-black text-white px-[14px] py-3">
                        °C
                    </div>
                    <div className="mr-8 border rounded-[100%] bg-[orange] text-white px-[14px] py-3">
                        °F
                    </div>
                </div>
            </div>
            <div className="w-full px-12 py-2 flex gap-5 flex-wrap">
            {showHourData ? (
            hourdata && hourdata
                .filter(hour => new Date(hour.time).getHours() >= currentHour) // Filter hours after current time
                .map(hour => (
                    <TempCard key={hour.temp_f} title={hour.time.split(' ')[1]} temperature={hour.temp_c.toString()} image={hour.icon}/>
                ))
                ) : (
                    dayForecast && dayForecast.map((forecast) => (
                        <TempCard key={forecast.date} title={weekdays[(new Date(forecast.date)).getDay()]} temperature={forecast.avgtemp_c.toString()} image={forecast.icon}/>
                    ))
                )}
            </div>
        </>
    );
}

 export default WeekRow;
