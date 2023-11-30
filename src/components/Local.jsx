import LocalJSON from "../json/local_2.json";

import LogoCoffe from "../assets/svg/coffe.svg"
import LogoMate from "../assets/svg/mate.svg"
import LogoTutorias from "../assets/svg/book.svg"
import LogoAguaCaliente from "../assets/svg/agua_caliente.svg"
import LogoApuntes from "../assets/svg/apuntes.svg"
import LogoTalleres from "../assets/svg/talleres.svg"
import LogoWifi from "../assets/svg/wifi.svg"
import LogoCargador from "../assets/svg/cargador.svg"
import LogoMicrowave from "../assets/svg/microwave.svg"



const elegirIcono = (nombreIcono) =>{
  const iconos = {
    "cafe": LogoCoffe,
    "cargador": LogoCargador,
    "mate": LogoMate,
    "apuntes": LogoApuntes,
    "wifi": LogoWifi,
    "talleres": LogoTalleres,
    "micorwave": LogoMicrowave,
    "cargador": LogoCargador,
    "agua_caliente": LogoAguaCaliente,
    "tutorias": LogoTutorias,


  }
  return iconos[nombreIcono] || LogoMicrowave
}

export default function Local() {
  return (
    <section id="Local" className='animate__animated animate__fadeInDown animate__fast'>
    <h2 className="text-gray-600 font-bold text-center text-2xl pt-5 mb-5 px-2">¿Que podes encontrar en nuestro local?</h2>
    <div className="flex justify-center flex-wrap gap-3 p-5 ">
        {LocalJSON &&
          LocalJSON.map((servicio_local, index) => {
            return(
            <div key={index} class="relative mt-1 flex w-96 flex-col rounded-xl bg-white text-gray-600">
                <div class="flex flex-nowrap justify-between mt-1 p-3 gap-3">
                    <span className="font-bold text-center">{servicio_local.nombre}</span>
                    <img className="w-6 inline" src={elegirIcono(servicio_local.nombreLogo)}></img>
                </div>
            </div>)
          })}
    </div>
    </section>
  );
}
