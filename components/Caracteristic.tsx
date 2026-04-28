// components/Caracteristic.tsx

type Caracteristica = {
  nombre: string;
  valor: string;
};

const Caracteristic = ({ caracteristicas }: { caracteristicas: Caracteristica[] }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm font-bold">Características Principales</p>
      <table className="w-full border-collapse bg-white">
        <tbody>
          {caracteristicas.map((carac, index) => (
            <tr key={index} className={(index % 2 === 0 ? 'bg-gray-100' : 'bg-white')}>
              <td className="px-4 py-2 font-semibold text-black whitespace-pre-wrap text-left">{carac.nombre}</td>
              <td className="px-4 py-2 whitespace-pre-wrap font-semibold text-gray-400 text-left">{carac.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Caracteristic;