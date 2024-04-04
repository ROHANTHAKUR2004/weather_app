import { BsDropletFill } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import REduxstate from "../../Interfaces/REduxState";
import { useSelector } from "react-redux";

export default function LowerHalf(){

    const currentData = useSelector((state: REduxstate) => state.forecast.data.currentData);
    const localtiondata = useSelector((state : REduxstate) => state.forecast.data.location);
    return(
        <div className="h-[50%] w-full p-4 flex flex-col justify-between"> 
           <div className="flex flex-col">
          
              <div className="flex items-center gap-4 my-2 text-sm">
                <div>
                    <AiFillCloud />
                </div>
                <div>
                  {currentData.condition}
                </div>
               </div>

            <div className="flex items-center gap-4 my-2 text-sm">
                <div>
                    <BsDropletFill />
                </div>
                <div>
                   perc - {currentData.chance_of_rain}%
                </div>
                  </div>
                 </div>

              <div className="flex gap-2 items-center">
            
                <div><MdLocationPin /></div>
            
              <div>{localtiondata.name},{localtiondata.region}, {localtiondata.country}</div>
        </div>
    </div>
    );
}