export default function Faq(props){
    return(
        <div class="w-96 p-5 bg-white shadow rounded">
        <h3 class="mb-2 block font-sans text-lg font-bold leading-snug tracking-normal text-gray-600 antialiased">
            {props.pregunta}
        </h3>
        <p class="block font-sans text-gray-500 text-sm leading-relaxed text-inherit antialiased">
            {props.respuesta}
        </p>
        <p className='text-gray-400 text-xs mt-2'>
            {props.extra}
        </p>

    </div>
    )
}