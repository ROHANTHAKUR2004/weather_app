import MainData from "../Components/Maindata/MainData";
import Sidebar from "../Components/sidebar/Sidebar";
import dayimg from '../Assets/sun2.png';
import nightimg from '../Assets/nightimg.jpg';
import { useEffect, useState } from "react";
import { fetchData } from "../Redux/Slice/ForecastSlice";
import { useAppDispatch } from "../hooks/hooks";
import axios from "axios";
import REduxstate from "../Interfaces/REduxState";
import { useSelector } from "react-redux";
export default function Home(){

    const dispatch = useAppDispatch();
    const[city , setcity]= useState<string>("");
    const currentData = useSelector((state: REduxstate) => state.forecast.data.currentData );

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( async(pos) =>{
            const response = await axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.e5a414db01c43447fcba98de75b28d1f&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json&`)
             setcity(response?.data?.address?.city);

        });
        if(!city){
       dispatch(fetchData('Indore'));
        }
    else{
        dispatch(fetchData(city));
    }
    },[city]);

    


    return(
        <div className="min-h-[100vh]  px-8 py-8 flex flex-row justify-center items-stretch"
         style={ {backgroundImage : `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${currentData.isDay == 1 ? dayimg : nightimg})`}}>

            <Sidebar/>
            <MainData/>
        
      
        </div>
    )
}

