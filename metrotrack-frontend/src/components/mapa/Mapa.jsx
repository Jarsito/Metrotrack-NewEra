import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import { obtenerEstacionesPorRuta } from "../../api/estacionRuta";

// Icono de estaciones
const iconEstacion = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [28, 28],
});

export default function Mapa({ rutaId }) {
    const [estacionesRuta, setEstacionesRuta] = useState([]);

    // Cargar estaciones cada vez que cambia la ruta seleccionada
    useEffect(() => {
        async function cargar() {
            const data = await obtenerEstacionesPorRuta(rutaId);
            setEstacionesRuta(data);
        }
        cargar();
    }, [rutaId]);  // 👈 importante

    const posiciones = estacionesRuta.map(e => [e.Latitud, e.Longitud]);

    return (
        <MapContainer 
            center={[-12.0464, -77.0428]} 
            zoom={12} 
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {estacionesRuta.map((est) => (
                <Marker
                    key={est.Id}
                    position={[est.Latitud, est.Longitud]}
                    icon={iconEstacion}
                >
                    <Popup>
                        <b>{est.Nombre}</b><br />
                        {est.Distrito}
                    </Popup>
                </Marker>
            ))}

            <Polyline positions={posiciones} color="blue" />
        </MapContainer>
    );
}
