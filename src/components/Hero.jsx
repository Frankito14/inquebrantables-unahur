import BannerImage from '../assets/images/banner3.png'
import Logo from '../assets/images/logo.png'

export default function Hero() {
    return (
        <div class="h-screen bg-cover bg-center bg-fixed flex items-center bg-slate-100 z-20" style={{backgroundImage: `url(${BannerImage})`}}>
            <section className="w-full container mx-auto text-white p-5 flex flex-wrap content-center justify-evenly" >
                <div className="w-96">
                    <h1 className="text-3xl font-black my-3 text-center lg:text-left">Inquebrantables</h1>
                    <h2 className="text-sm text-gray-300 font-bold my-2 hidden lg:block ">Centro de estudiantes de la Universidad Nacional de Hurlingham</h2>
                    <p className="text-sm text-gray-300 my-8 px-8 lg:px-0 lg:my-2">Somos el centro de estudiantes de la Universidad Nacional de Hurlingham. Nos dedicamos a transmitir el descenso de riber plate el dia 26/6/2011, el dia que el club murio</p>
                    <div className='my-8 text-center md:text-justify'>
                        <a href="https://www.instagram.com/inquebrantables.unahur/" target="_blank" className="bg-unahur-blue text-white py-3 px-6 rounded-full hover:bg-unahur-blue-dark transition">Seguinos</a>
                    </div>
                </div>
                <div className='w-96'>
                    <img className='w-52 mt-1 mx-auto' src={Logo}></img>
                </div>
            </section>
        </div>
    )
}