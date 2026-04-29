
const articulos = [
  {
    id: 'articulo-1',
    titulo: 'Titulo del articulo 1',
    resumen: 'Resumen del articulo 1',
    contenido: '<p>Contenido del articulo 1</p>',
  },
  {
    id: 'articulo-2',
    titulo: 'Titulo del articulo 2',
    resumen: 'Resumen del articulo 2',
    contenido: '<p>Contenido del articulo 2</p>',
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-violet-600 mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articulos.map((articulo) => (
          <article key={articulo.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4">{articulo.titulo}</h2>
            <p className="text-gray-600 mb-6">{articulo.resumen}</p>
            <div dangerouslySetInnerHTML={{ __html: articulo.contenido }} className="prose prose-sm" />
          </article>
        ))}
      </div>
    </main>
  );
}
