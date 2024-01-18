import TarjetasImage from '../assets/images/tarjeta.png'

export default function TarjetaDescuento(){
    return(
        <section id="TarjetaDescuento" className='animate__animated animate__fadeInDown animate__fast pt-6'>
            <h2 className="text-gray-600 font-bold text-center text-2xl mb-5 px-2">Tarjetas de descuento</h2>
            <div className="flex flex-wrap justify-center gap-5 p-5 mb-5">
                <div className='w-96 text-gray-500 text-inherit'>
                    <p className='text-gray-600'>Pedi tu tarjeta de descuento para poder acceder a increibles beneficios en los locales adheridos</p>
                    <p className='text-gray-400 text-xs mt-2'>Para ser beneficiario tenes que acercarse al centro para hacerla en el momento</p>
                    <p className='text-center my-10 mx-auto'><a href="https://www.google.com/maps/d/u/0/viewer?mid=1SdedlFxPc1TPNYVePlY3wiefgb-Lkjs&ll=-34.59960733631183%2C-58.64726716093161&z=12" target="_blank" className="text-white py-4 px-12 rounded-full bg-unahur-blue  hover:bg-unahur-blue-dark transition">Ver locales adheridos</a></p>
                </div>
                <img className='w-96 rounded' src={TarjetasImage}></img>
            </div>
        </section>
    )
}