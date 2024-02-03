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
    <h2 className="text-gray-600 font-bold text-center text-lg pt-5 mb-5 px-2">¿Que podes encontrar en nuestro local?</h2>
    <div className="flex flex-wrap justify-evenly w-full sm:w-3/4 m-auto gap-3 p-8">
        {LocalJSON &&
          LocalJSON.map((servicio_local, index) => {
            return(
                <div key={index} className="bg-white py-5 text-center w-full sm:w-48 rounded-xl shadow-sm">
                    <img className="w-12 m-auto" src={elegirIcono(servicio_local.nombreLogo)}></img>
                    <p className="font-semibold mt-3 text-center text-xs">{servicio_local.nombre}</p>
                </div>)
          })}
    </div>
    </section>
  );
}
