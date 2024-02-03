
import LogoBarberia from '../assets/svg/servicios/barberia.svg';
import LogoPsico from '../assets/svg/servicios/psico.svg';
import LogoSexualidad from '../assets/svg/servicios/sexualidad.svg';

const logos = {
  1: LogoBarberia,
  2: LogoPsico,
  3: LogoSexualidad,
}


export default function CardServicio(props) {
  return (
    <div class="w-full sm:w-72 text-center overflow-hidden p-5 bg-white rounded-xl shadow-md">
      <p className='text-gray-500 text-md font-bold '>{props.dia}</p>
      <img className="m-auto w-24 my-5"src={logos[props.id]}/>
      <h2 className='text-unahur-green text-md font-bold'>{props.titulo}</h2>
      <p className='text-gray-400 text-sm mt-3'>{props.descripcion}</p>
    </div>
  );
}
