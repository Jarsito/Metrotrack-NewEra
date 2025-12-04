import { useEffect, useState } from "react";
import { getRutas } from "../api/rutas";

function LinesSection() {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getRutas();
        setRutas(data);
      } catch (err) {
        console.error("Error cargando rutas:", err);
      }
    }
    cargar();
  }, []);

  return (
    <section className="py-12 border-b border-slate-800 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl font-bold">Líneas y servicios</h2>
        <p className="text-sm text-slate-400">
          Todas las rutas del Metropolitano integradas con MetroTrack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rutas.map((r) => (
            <div
              key={r.Id}
              className="p-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 transition"
            >
              <h3 className="text-lg font-semibold">{r.Nombre}</h3>
              <p className="text-xs text-slate-400 capitalize">
                {r.Tipo}
              </p>

              <p className="text-sm mt-2 text-slate-300 line-clamp-3">
                {r.Descripcion || "Sin descripción"}
              </p>

              <a
                href={`/ruta/${r.Id}`}
                className="text-emerald-400 text-xs mt-3 inline-block"
              >
                Ver detalles →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LinesSection;
