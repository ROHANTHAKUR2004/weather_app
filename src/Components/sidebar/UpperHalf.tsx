import { AiOutlineSearch } from 'react-icons/ai';
import cloudnight from '../../Assets/CloudyNight.png';
import {  useSelector } from 'react-redux';
import REduxstate from '../../Interfaces/REduxState';
import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../hooks/hooks';
import { fetchData } from '../../Redux/Slice/ForecastSlice';


export default function UpperHalf(){

    const [city , setcity] = useState<string>("");

   const dispatch = useAppDispatch();

  async function handlesearch(){
     await dispatch(fetchData(city));
   }

   useEffect(()=>{
    handlesearch();
   },[]);

    const currentData = useSelector((state: REduxstate) => state.forecast.data.currentData)
    const localtiondata = useSelector((state : REduxstate) => state.forecast.data.location);
    
    const convertTime = inputTime => new Date(inputTime).toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric' });
    
    return(
      <div className="max-h-[30rem] w-full p-4 flex flex-col justify-center items-start basis-[65%]">
           <div className="flex flex-start   w-full sm:m-0 mt-4">
              <input 
                 className="px-2 py-2 rounded-tl-md rounded-bl-md block basis-[90%] bg-white sm:w-4 sm:items-start text-black"
                 placeholder="Search.."
                 type="text"
                 onChange={(e) =>{
                    setcity(e.target.value);
                  
                 }}
              />
              <button
              onClick={handlesearch}
               className='block basis-[10%] p-4 text-white text-lg font-semibold bg-sky-500 rounded-tr-md rounded-br-md'>
                    <AiOutlineSearch />
              </button>
           </div>

           <div className="w-full h-[60%] flex justify-center mt-12">
                <img 
                    src={cloudnight}
                    className="w-[60%] h-full"
                />
            </div>

            <div className="flex flex-col mt-2">
                <div className="text-7xl text-black flex items-start">
                    <div>{currentData.temp_c}</div> 
                    <div className="text-5xl mt-1">°C</div>
                </div>
                <div className="text-black text-md">
                {convertTime(localtiondata.localtime)}
                </div>
            </div>

      </div>
    );
}