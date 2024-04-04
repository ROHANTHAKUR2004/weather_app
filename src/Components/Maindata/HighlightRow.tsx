import { useSelector } from "react-redux";
import HighlightCard from "../HighlightCard";
import REduxstate from "../../Interfaces/REduxState";

export default function HighlightRow(){

    const currentData = useSelector((state: REduxstate) => state.forecast.data.currentData)


    function uvRange() : string {
        if(currentData.uv <= 5) return "Low";
        else if(currentData.uv > 5 && currentData.uv < 8) return "Moderate"
        else return "High";
    }

    function hum() : string{
        if(currentData.humidity <= 30) return "Dry";
        else return "High";
    }

    function air () : string {
        if(currentData.aqi < 50) return "Good";
        else return "Moderate";
    }
    return(
        <div className="flex flex-wrap gap-5 px-10 py-2">

            <HighlightCard title="Uv Index" data={currentData.uv.toString()} footer={uvRange()}/>
            <HighlightCard title="Wind Status" data={currentData.wind_kmph.toString()} footer="km/h"/>
            <HighlightCard title="Humidity" data={currentData.humidity.toString() + "%"} footer={hum()}/>
            <HighlightCard title="Sunrise" data={currentData.sunrise.toString()} footer=""/>
            <HighlightCard title="Sunset" data={currentData.sunset.toString()} footer=""/> 
             <HighlightCard title="Air Quality" data={currentData.aqi.toString()} footer={air()}/> 

        </div>
        
     
    )
}