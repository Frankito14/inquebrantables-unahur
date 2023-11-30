import { useState } from 'react'
import LogoInicio from "../assets/svg/home.svg"
import LogoNoches from "../assets/svg/noches.svg"
import LogoTarjeta from "../assets/svg/credit_card.svg"
import LogoQuienesSomos from "../assets/svg/persona.svg"
import LogoSugerencias from "../assets/svg/sugerencias.svg"
import LogoApuntes from "../assets/svg/bancoApuntes.svg"
import LogoFAQ from "../assets/svg/faq.svg"




import NavigatorLink from './NavigatorLink';

export default function Navigator() {
    const [estaActivo, setEstaActivo] = useState(false);
    if (!estaActivo)
    return (
        <nav className='w-full bg-white text-black flex flex-items justify-end gap-2 fixed top-0 z-10 animate__animated animate__fadeIn animate__fast'>
            <svg onClick={()=>{setEstaActivo(!estaActivo)}} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 p-2 hover:cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        </nav>
    )
    else
    return(
        <nav className='w-full bg-gray-700 text-white flex flex-wrap flex-items justify-end gap-2 fixed top-0 z-10 animate__animated animate__fadeInDown animate__fast'>
            <svg onClick={()=>{setEstaActivo(!estaActivo)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 p-2 hover:cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            <div>
                <NavigatorLink route="/QuienesSomos" name="¿Quienes somos?" logo={LogoQuienesSomos}></NavigatorLink>
                <NavigatorLink route="/Inicio" name="¿Que ofrecemos?" logo={LogoInicio}></NavigatorLink>
                <NavigatorLink route="/NuestroLocal" name="Nuestro local" logo={LogoNoches}></NavigatorLink>
                <NavigatorLink route="/TarjetaDescuentos" name="Tarjeta de descuentos" logo={LogoTarjeta}></NavigatorLink>
                <NavigatorLink route="/BancoDeApuntes" name="Banco de apuntes" logo={LogoApuntes}></NavigatorLink>
                <NavigatorLink route="/PreguntasFrecuentes" name="Preguntas frecuentes" logo={LogoFAQ}></NavigatorLink>
                <NavigatorLink route="https://docs.google.com/forms/d/e/1FAIpQLScpPp0X5-nzINu4zKNBy_XR_2nqFP-Vg7Tb8a6Bb135juM1HA/viewform?usp=pp_url" name="Envianos tus sugerencias" logo={LogoSugerencias}></NavigatorLink>
            </div>
        </nav>
    )
}
