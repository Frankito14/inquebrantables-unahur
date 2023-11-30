import Image from '../assets/images/troll.png'
export default function Proximamente(){
    return(
        <section id="Servicios" className='animate__animated animate__fadeInDown animate__fast'>
            <h2 className="text-gray-500 font-bold text-center text-2xl px-2">Proximamente...</h2>
            <img className='w-48 mx-auto my-10' src={Image}></img>
        </section>
    )
}