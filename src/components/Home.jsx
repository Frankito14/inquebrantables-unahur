import Local from "./Local";
import QuienesSomos from "./QuienesSomos";
import Servicios from "./Servicios";

export default function Home(){
    return(
        <>
            <QuienesSomos></QuienesSomos>
            <Servicios></Servicios>
            <Local></Local>
        </>
    )
}