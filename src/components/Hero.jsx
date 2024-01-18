import BannerImage from '../assets/images/banner3.png'
import Logo from '../assets/images/logo.png'

export default function Hero() {
    return (
        <div class="h-screen bg-cover bg-center bg-fixed flex items-center bg-slate-100 z-20" style={{backgroundImage: `url(${BannerImage})`}}>
            <section className="w-full container mx-auto text-white p-5 flex flex-wrap content-center justify-evenly" >
                <div className="w-96">
                    <h1 className="text-4xl font-black my-5 text-center lg:text-left">Inquebrantables</h1>
                    <p className="text-sm text-gray-300 leading-6 my-8 px-8 lg:px-0 lg:my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat pariatur voluptate aut consequatur! Obcaecati dolor aliquam mollitia, tempora aspernatur laudantium reiciendis incidunt quidem ullam delectus eius tempore eveniet architecto qui.</p>
                    <div className='my-8 text-center lg:text-justify'>
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