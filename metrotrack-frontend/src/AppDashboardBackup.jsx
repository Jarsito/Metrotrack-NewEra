import { useState, useEffect } from "react";
import Mapa from "./components/mapa/Mapa";
import api from "./api/api";

function App() {
  const [rutas, setRutas] = useState([]);
  const [rutaSeleccionada, setRutaSeleccionada] = useState(1);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    async function cargar() {
      const res = await api.get("/rutas");
      setRutas(res.data.data);
    }
    cargar();
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 gap-8">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-center">MetroTrack</h1>

        {/* LISTA DE RUTAS */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Rutas</h2>
          <ul className="space-y-2">
            {rutas.map((ruta) => (
              <li
                key={ruta.Id}
                className={`p-2 rounded cursor-pointer transition ${
                  ruta.Id === rutaSeleccionada
                    ? "bg-blue-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
                onClick={() => setRutaSeleccionada(ruta.Id)}
              >
                {ruta.Nombre}
              </li>
            ))}
          </ul>
        </div>

        {/* BUSCADOR */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Buscar estación</h2>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-blue-500"
            placeholder="Naranjal, UNI, Canadá..."
          />
        </div>
      </aside>

      {/* MAPA */}
      <main className="flex-1">
        <Mapa rutaId={rutaSeleccionada} />
      </main>
    </div>
  );
}

export default App;
