
import HighlightRow from "./HighlightRow";

import WeekRow from "./WeekRow";

export default function MainData(){
    
    return(
        <div className=" flex overflow-y-auto flex-col justify-start
          items-center  basis-9/12  py-4
         text-black rounded-tr-3xl rounded-br-3xl bg-[#f6f6f8]"
         >
         <WeekRow/>
         <div className="font-semibold text-2xl  mt-8 text-left w-full px-12 py-2">
            Today's Highlight
         </div>
         <HighlightRow/>
        </div>
    );
}