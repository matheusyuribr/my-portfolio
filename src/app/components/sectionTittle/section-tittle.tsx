import "./section-tittle.scss";

interface SectionTittleProps {
    text : string
}
export function SectionTittle({text}:SectionTittleProps){
    return(
        <h3 className="section-tittle">{text}</h3>
    )
}