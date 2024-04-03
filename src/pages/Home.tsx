import MainData from "../Components/Maindata/MainData";
import Sidebar from "../Components/sidebar/Sidebar";
import nightimg from '../Assets/nightimg.jpg';
import { useEffect } from "react";
import { fetchData } from "../Redux/Slice/ForecastSlice";
import { useAppDispatch } from "../hooks/hooks";
export default function Home(){

    const dispatch = useAppDispatch();

    useEffect(()=>{
       dispatch(fetchData());
    },[]);

    return(
        <div className="min-h-[100vh]  px-8 py-8 flex flex-row justify-center items-stretch"
         style={{backgroundImage : `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${nightimg})`}}>

            <Sidebar/>
            <MainData/>
        
      
        </div>
    )
}