import TempCard from "../TempCard";
import cloud from '../../Assets/Cloudytemp.png'
export default function WeekRow(){
    return(
       <div className="w-full px-12 py-2 flex gap-5  flex-wrap">
           <TempCard  title="Monday" temperature="25" image={cloud}/>
           <TempCard  title="Monday" temperature="25" image={cloud}/>
           
       </div>
    )
}