export default function Card(props) {
    return (
        <div class="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="p-6">
                {/* <p class="block font-sans bg-unahur-green-dark border-current border-1 rounded text-center text-white text-base font-bold leading-relaxed text-inherit antialiased mb-3"> */}
                <p class="block font-sans text-unahur-green text-base font-semibold leading-relaxed text-inherit antialiased mb-3">    
                    {props.dia}
                </p>
                <h5 class="mb-2 block font-sans text-lg font-bold leading-snug tracking-normal text-gray-600 antialiased">
                    {props.titulo}
                </h5>
                <p class="block font-sans text-gray-300 text-sm leading-relaxed text-inherit antialiased">
                    {props.descripcion}
                </p>
            </div>
            <div class="p-6 pt-0">
                <a class="!font-medium !text-unahur-blue-dark !transition-colors hover:!text-unahur-green" href="https://www.instagram.com/inquebrantables.unahur/">
                    <button class="flex select-none items-center rounded-lg py-2 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-unahur-dark transition-all hover:bg-emerald-500/10 active:bg-emerald-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-dark="true">
                        Ver más
                    </button>
                </a>
            </div>
        </div>
    )
}