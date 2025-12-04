import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getEstacionesPorRuta } from "../../api/rutas";

function Mapa() {
  const [estaciones, setEstaciones] = useState([]);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getEstacionesPorRuta(1); // Expreso 1
        setEstaciones(data);
      } catch (err) {
        console.error("Error cargando estaciones:", err);
      }
    }
    cargar();
  }, []);

  if (estaciones.length === 0) {
    return <p style={{ textAlign: "center" }}>Cargando Expreso 1...</p>;
  }

  const polylinePositions = estaciones.map(e => [e.Latitud, e.Longitud]);

  return (
    <MapContainer
      center={[-12.05, -77.03]}
      zoom={12}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {estaciones.map((e, i) => (
        <Marker key={i} position={[e.Latitud, e.Longitud]}>
          <Popup>
            <strong>{e.Nombre}</strong><br />
            Distrito: {e.Distrito}<br />
            Orden: {e.Orden}
          </Popup>
        </Marker>
      ))}

      <Polyline positions={polylinePositions} color="blue" weight={4} />
    </MapContainer>
  );
}

export default Mapa;
