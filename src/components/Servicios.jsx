import Card from "./Card";
import ServiciosJSON from "../json/servicios.json";

export default function Servicios() {
  return (
    <section id="Servicios" className='animate__animated animate__fadeInDown animate__fast'>
      <h2 className="text-gray-600 font-bold text-center text-2xl px-2">Servicios</h2>
      <div className="flex justify-center flex-wrap gap-5 p-5">
        {ServiciosJSON &&
          ServiciosJSON.map((servicio, index) => {
            return (
              <Card
                key={index}
                dia={servicio.dia}
                titulo={servicio.servicio}
                descripcion={servicio.descripcion}
              ></Card>
            );
          })}
      </div>
    </section>
  );
}
