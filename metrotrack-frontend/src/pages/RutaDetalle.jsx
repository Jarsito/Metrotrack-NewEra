import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRutas, getEstacionesPorRuta } from "../api/rutas";
import Mapa from "../components/mapa/Mapa";

function RutaDetalle() {
  const { id } = useParams();
  const [ruta, setRuta] = useState(null);
  const [estaciones, setEstaciones] = useState([]);

  useEffect(() => {
    async function cargar() {
      const rutas = await getRutas();
      const seleccionada = rutas.find(r => r.Id === parseInt(id));
      setRuta(seleccionada);

      const estacionesData = await getEstacionesPorRuta(id);
      setEstaciones(estacionesData);
    }
    cargar();
  }, [id]);

  if (!ruta) return <div className="p-10">Cargando...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-6 space-y-6">

      <h1 className="text-3xl font-bold">{ruta.Nombre}</h1>
      <p className="text-slate-400">{ruta.Descripcion}</p>

      <h2 className="text-xl font-semibold mt-4">Paraderos</h2>
      <ul className="space-y-1 text-slate-300">
        {estaciones.map(e => (
          <li key={e.EstacionId}>
            {e.Orden}. {e.Nombre}
          </li>
        ))}
      </ul>

      <div className="h-[450px] rounded-xl overflow-hidden border border-slate-800">
        <Mapa rutaId={id} />
      </div>

    </div>
  );
}

export default RutaDetalle;
