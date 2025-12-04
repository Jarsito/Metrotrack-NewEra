import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getEstacionesPorRuta } from "../api/rutas";

function MapSection() {
  const [rutaId, setRutaId] = useState(1); // ruta inicial
  const [estaciones, setEstaciones] = useState([]);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getEstacionesPorRuta(rutaId);
        setEstaciones(data);
      } catch (error) {
        console.error("Error cargando estaciones:", error);
        setEstaciones([]);
      }
    }
    cargar();
  }, [rutaId]);

  const polyline = estaciones.map((e) => [e.Latitud, e.Longitud]);

  return (
    <section
      id="mapa"
      className="border-b border-slate-800 bg-slate-900 py-10 md:py-12"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold">Mapa en tiempo real</h2>
            <p className="text-sm text-slate-400">
              Vista integrada del mapa Leaflet utilizado por MetroTrack.
            </p>
          </div>

          {/* SELECTOR DE RUTA */}
          <div className="flex flex-col">
            <label className="text-xs text-slate-400 mb-1">
              Seleccionar ruta:
            </label>

            <select
              value={rutaId}
              onChange={(e) => setRutaId(Number(e.target.value))}
              className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md border border-slate-700"
            >
              {/* EXPRESOS */}
              <option value="1">Expreso 1</option>
              <option value="2">Expreso 2</option>
              <option value="3">Expreso 3</option>
              <option value="5">Expreso 5</option>
              <option value="6">Expreso 6</option>
              <option value="7">Expreso 7</option>
              <option value="8">Expreso 8</option>
              <option value="9">Expreso 9</option>
              <option value="10">Expreso 10</option>
              <option value="11">Expreso 11</option>
              <option value="12">Expreso 12</option>
              <option value="13">Expreso 13</option>

              {/* ESPECIALES */}
              <option value="14">Expreso L (Lechucero)</option>
              <option value="15">Súper Expreso SX</option>
              <option value="16">Súper Expreso Norte (SXN)</option>

              {/* RUTAS REGULARES */}
              <option value="17">Ruta A</option>
              <option value="18">Ruta B</option>
              <option value="19">Ruta C</option>
              <option value="20">Ruta D</option>
            </select>
          </div>
        </header>

        {/* MAPA */}
        <div className="h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
          {estaciones.length === 0 ? (
            <div className="flex items-center justify-center h-full text-slate-400">
              Cargando ruta {rutaId}...
            </div>
          ) : (
            <MapContainer
              center={[estaciones[0].Latitud, estaciones[0].Longitud]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {estaciones.map((e) => (
                <Marker
                  key={e.EstacionId}
                  position={[e.Latitud, e.Longitud]}
                >
                  <Popup>
                    <strong>{e.Nombre}</strong>
                    <br />
                    Distrito: {e.Distrito}
                    <br />
                    Orden: {e.Orden}
                  </Popup>
                </Marker>
              ))}

              <Polyline positions={polyline} color="cyan" weight={4} />
            </MapContainer>
          )}
        </div>
      </div>
    </section>
  );
}

export default MapSection;
