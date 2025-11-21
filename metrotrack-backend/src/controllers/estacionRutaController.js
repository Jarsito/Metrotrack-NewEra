const {
  obtenerEstacionesPorRuta,
  asignarEstacion
} = require("../models/estacionRutaModel");

// GET: estaciones de una ruta
async function obtenerPorRuta(req, res) {
  try {
    const rutaId = parseInt(req.params.rutaId);

    if (isNaN(rutaId)) {
      return res.status(400).json({ ok: false, message: "rutaId inválido" });
    }

    const estaciones = await obtenerEstacionesPorRuta(rutaId);
    res.json({ ok: true, data: estaciones });

  } catch (error) {
    console.error("Error obtener estaciones:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// POST: asignar estación a ruta
async function asignar(req, res) {
  try {
    const { rutaId, estacionId, orden } = req.body;

    if (!rutaId || !estacionId || !orden) {
      return res.status(400).json({
        ok: false,
        message: "rutaId, estacionId y orden son obligatorios"
      });
    }

    const result = await asignarEstacion({ rutaId, estacionId, orden });
    res.json({ ok: true, data: result });

  } catch (error) {
    console.error("Error asignar estacion:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

module.exports = {
  obtenerPorRuta,
  asignar
};
