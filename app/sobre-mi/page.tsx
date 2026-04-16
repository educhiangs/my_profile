import Image from "next/image"

export default function AboutMe() {
    return (
        <section className="container max-w-7xl mx-auto py-20 bg-violet-500">
            <div className="flex flex-row justify-around px-20 py-10">
                <div className="w-48 h-48">
                    <Image 
                        src={"/perfil.png"}
                        alt="Mi perfil"
                        width={256}
                        height={256}
                        className="rounded-full object-cover ring-4 ring-white shadow-lg"
                    />
                </div>
                <div className="px-10">
                    <h1 className="text-amber-100 mb-6 font-bold text-6xl md:text-6xl">
                        Mi Nombre es: Eduardo
                    </h1>
                    <p>Estudie: <span className="font-semibold text-amber-200">Carrera</span> </p>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-20">
                <h2 className="text-amber-400 text-2xl uppercase tracking-wider">Me especializo en: </h2>
                <ul className="mt-4 text-white opacity-80 list-disc list-inside text-lg">
                    <li>Desarrollo con Next.js</li>
                    <li>Diseño con Tailwind CSS</li>
                    <li>Arquitectura de componentes</li>
                </ul>
            </div>
        </section>
    )
}