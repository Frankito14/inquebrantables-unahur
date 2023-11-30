import Image1 from '../assets/images/galleria/noche1.jpg'
import Image2 from '../assets/images/galleria/local2.jpg'
import Image3 from '../assets/images/galleria/local3.jpg'
import Image4 from '../assets/images/galleria/local5.jpg'
import Image5 from '../assets/images/galleria/local6.jpg'
import Image6 from '../assets/images/galleria/local7.jpg'




const galeria = [
    {'img':Image1, 'desc': "Noche inquebrantable"},
    {'img':Image2, 'desc': "Tutorias"},
    {'img':Image3, 'desc': "Tutorias"},
    {'img':Image4, 'desc': "Borrachos"},
    {'img':Image5, 'desc': "Nuestro local"},
    {'img':Image6, 'desc': "Nuestro local"},
]

export default function NochesInquebrantables(){
    return(
        <section id="NochesInquebrantables" className='animate__animated animate__fadeInDown animate__fast pt-6'>
            <h2 className="text-gray-600 font-bold text-center text-2xl mb-5 px-2">Nuestro Local</h2>
            <p className="text-gray-500 mt-2 p-10">El descenso de River Plate a la Primera B Nacional fue un acontecimiento deportivo ocurrido el 26 de junio de 2011 en el Estadio «Monumental» Antonio Vespucio Liberti de Buenos Aires (Argentina). El equipo «millonario» perdió la categoría luego de la derrota por 1-3 (0-2 de ida y 1-1 de vuelta) en la serie por la promoción frente a Belgrano. La noticia causó conmoción en el fútbol argentino.1​</p>
            <div className='flex flex-wrap gap-2 p-5 justify-center '>
                {
                    galeria.map((foto, index) => {
                        return(
                            <picture className='w-full sm:w-80 hover:brightness-50 transition relative'>
                                <p className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-lg text-white font-semibold">{"#"+index+" - "+foto.desc}</p>
                                <img className="rounded" key={index} src={foto.img} alt={foto.desc} title={foto.desc}></img>
                            </picture>
                        )
                    })
                }
            </div>
        </section>
    )
}