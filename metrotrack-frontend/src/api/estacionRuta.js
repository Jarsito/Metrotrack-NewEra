import api from "./api";

export async function obtenerEstacionesPorRuta(rutaId) {
    const res = await api.get(`/estacion-ruta/${rutaId}`);
    return res.data.data;
}
