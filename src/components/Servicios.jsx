import Card from "./Card";
import ServiciosJSON from "../json/servicios.json";
import CardServicio from "./CardServicio";

export default function Servicios() {
  return (
    <section id="Servicios" className='animate__animated animate__fadeInDown animate__fast'>
      <h2 className="text-gray-600 font-bold text-center text-lg px-2">Servicios</h2>
      <div className="flex justify-evenly flex-wrap gap-5 p-5 ">
        {ServiciosJSON &&
          ServiciosJSON.map((servicio) => {
            return (
              <CardServicio
                key={servicio.id}
                id={servicio.id}
                dia={servicio.dia}
                titulo={servicio.servicio}
                descripcion={servicio.descripcion}
              ></CardServicio>
              
            );
          })}
      </div>
    </section>
  );
}
