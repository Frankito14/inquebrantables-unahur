import Image from '../assets/images/banco_apuntes.png'

export default function BancoDeApuntes(){
    return(
        <section id="QuienesSomos" className='py-5 animate__animated animate__fadeInDown animate__fast pt-6 flex flex-wrap gap-5 justify-center'>
            <div className="w-96 p-1">
                <h2 className="text-gray-600 font-bold text-center text-2xl mb-5 px-2">Banco de apuntes</h2>
                <p className="text-gray-500 mt-2 p-2">Ingresa al banco de apuntes, una recopilacion de material en la que podras encontrar apuntes, notas, ejercicios y cualquier tipo de archivo digital que busques para la materia que necesites​</p>
                <p className='text-gray-400 text-xs mt-2 mb-10 p-2'>Podes mandarnos tus apuntes a <a className="font-bold text-unahur-blue hover:unahur-blue-dark" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLrTFtjTfjjBcPLltZssghcCzLbbplsFbdSPmvCTqNZfDGbBZHnvwjqLZjcLdStFXbBzlb" target="_blank">inquebrantables.unahur@gmail.com</a></p>
                <p className='text-center my-10 mx-auto'><a href="https://drive.google.com/drive/folders/1RHYEJ9E4Ls-m5vsBZirHKFcibCXLC9jw?usp=sharing" target="_blank" className="text-white py-4 px-12 rounded-full bg-unahur-blue  hover:bg-unahur-blue-dark transition">Ingresar</a></p>
            </div>
            <img className='w-96 rounded' src={Image}></img>
        </section>
    )
}