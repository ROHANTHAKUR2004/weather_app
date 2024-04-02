import MainData from "../Components/MainData";
import Sidebar from "../Components/Sidebar";
import nightimg from '../Assets/nightimg.jpg';
export default function Home(){
    return(
        <div className="h-[100vh]"
         style={{backgroundImage : `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${nightimg})`}}>
           <div className="h-[90%]  mx-8 py-8 flex flex-row justify-center items-center" >
            <Sidebar/>
            <MainData/>
        </div>
      
        </div>
    )
}