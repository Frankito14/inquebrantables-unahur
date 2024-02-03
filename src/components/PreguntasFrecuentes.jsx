import Faq from "./Faq";
import Preguntas from '../json/faqs.json'

export default function PreguntasFrecuentes(){
    return(
        <section id="Faqs" className='animate__animated animate__fadeInDown animate__fast pt-6'>
            <h2 className="text-gray-600 font-bold text-center text-2xl mb-5 px-2">Preguntas frecuentes (En desarollo)</h2>
            <div className="flex flex-wrap justify-center gap-5 p-5 mb-5">
                {Preguntas && Preguntas.map((item, index)=>{
                    return(
                        <Faq key={index} pregunta={item.pregunta} respuesta={item.respuesta} extra={item.extra}></Faq>
                    )
                })}
            </div>
        </section>
    )
}