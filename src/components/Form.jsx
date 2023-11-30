export default function Form(){
    return(
        <div className="w-[30rem] p-2 mx-auto">
                <h2 className="text-gray-600 font-bold text-center text-2xl mb-5 px-2">Envianos tus apuntes</h2>
                <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <div className="mb-4">
                        <input type="text" placeholder="Nombre" className="mb-3 email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500" required/>
                        <input type="text" placeholder="Apellido" className="mb-3 email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500" required/>
                        <input type="text" placeholder="Materia" className="mb-3 email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500" required/>
                        <input type="email" placeholder="Mail" className="mb-3 email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500" required/>
                        <input type="file" className="w-full py-2 text-gray-700 focus:border-blue-500" required/>
                        <p className='text-gray-400 text-xs mt-2'>El archivo debe estar en comprimido (Zip, Rar) y debe contener todos los apuntes de la materia elegida</p>
                    </div>
                    <button className="text-white py-2 px-6 rounded bg-unahur-blue  hover:bg-unahur-blue-dark transition">Enviar</button>
                </form>
            </div>
    )
}