import HighlightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

export default function MainData(){
    return(
        <div className=" flex  flex-col justify-between 
          items-center  basis-9/12 h-full py-4
         text-black rounded-tr-3xl rounded-br-3xl bg-[#f6f6f8]"
         >
         <TopRow/>
         <WeekRow/>
         <div>
            Todays Highlight
         </div>
         <HighlightRow/>
        </div>
    );
}