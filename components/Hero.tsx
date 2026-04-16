export default function Hero() {
    return ( 
        <section className="text-white py-20 px-6"> 
            {/* El div actúa como "container" para centrar el contenido */}
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                    Tu Título Impactante
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl">
                    Una breve descripción de lo que hace tu aplicación o servicio.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="rounded-md bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500">
                        Comenzar
                    </button>
                    <a href="#" className="text-sm font-semibold leading-6">
                        Saber más <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}