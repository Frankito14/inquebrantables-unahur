import BannerImage from '../assets/images/banner3.png'
import Logo from '../assets/images/logo.png'

export default function Banner() {
    return (
        <div class="h-screen bg-cover bg-center bg-fixed flex items-center bg-slate-100 z-20" style={{backgroundImage: `url(${BannerImage})`}}>
            <section className="w-full" >
                <div className="container mx-auto text-center text-white p-5">
                    <img className='w-40 mt-1 mx-auto' src={Logo}></img>
                    <h1 className="text-3xl font-black my-3">Inquebrantables</h1>
                    <span className='text-2xl font-extrabold my-3 text-unahur-blue'>Centro</span><span className='text-2xl font-bold my-5'> de </span><span className='text-2xl font-bold my-5 text-unahur-green'>Estudiantes</span>
                    <p className="text-base font-semibold text-gray-300 mt-5">@unahurlingham</p>
                    <p className="text-sm font-bold text-gray-300 my-3">SOMOS INQUEBRANTABLES</p>
                    <p className='my-10'><a href="https://www.instagram.com/inquebrantables.unahur/" target="_blank" className="bg-unahur-blue text-white py-4 px-12 rounded-full hover:bg-unahur-blue-dark transition">Seguinos</a></p>
                </div>
            </section>
        </div>
    )
}