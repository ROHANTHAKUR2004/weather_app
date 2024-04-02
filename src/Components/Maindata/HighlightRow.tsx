import HighlightCard from "../HighlightCard";

export default function HighlightRow(){
    return(
        <div className="flex flex-wrap gap-6 px-12 py-2">

            <HighlightCard title="Uv Index" data="3.9" footer="low"/>
            <HighlightCard title="Uv Index" data="3.9" footer="low"/>
            <HighlightCard title="Uv Index" data="3.9" footer="low"/>

        </div>
        
     
    )
}