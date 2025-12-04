export async function getEstacionesPorRuta(idRuta) {
  const url = `http://localhost:3001/api/rutas/${idRuta}/estaciones`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.ok) throw new Error("No se pudieron obtener las estaciones");

  return data.data;
}

export async function getRutas() {
  const url = "http://localhost:3001/api/rutas";

  const response = await fetch(url);
  const data = await response.json();

  if (!data.ok) throw new Error("No se pudieron obtener las rutas");

  return data.data;
}
