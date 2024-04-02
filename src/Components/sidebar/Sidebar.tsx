import LowerHalf from "./LowerHalf";
import UpperHalf from "./UpperHalf";

export default function Sidebar(){
    return(
        <div className="basis-3/12 overflow-y-auto
         flex flex-col items-center justify-center
         text-black h-full rounded-tl-3xl rounded-bl-3xl "
          style={{background: 'rgba(255,255,255,0.815)'}
          }>
          
          <UpperHalf/>

          <div className="h-[1px] w-[87%] bg-[#e9ecef] mt-8 rounded-md">

        </div>

        <LowerHalf/>

        </div>
    );
}