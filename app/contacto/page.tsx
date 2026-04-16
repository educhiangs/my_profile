export default function ContactPage() {
    return (
        <div className="py-20 px-10 bg-orange-400 flex flex-col items-center">
            <h1 className="text-3xl text-gray-200 font-bold">Contacto</h1>
            <form className="mt-6 flex flex-col gap-4 max-w-md">
                <input 
                    type="email"
                    placeholder="Tu correo"
                    className="p-2 rounded border border-gray-300 text-black"
                 />
                 <textarea
                    placeholder="Tu mensaje"
                    className="p-2 rounded border-gray-300 text-black"
                 ></textarea>
                 <button
                    className="bg-blue-400 text-white py-2 rounded hover:bg-blue-800"
                 >
                    Enviar
                 </button>
            </form>
        </div>
    )
}