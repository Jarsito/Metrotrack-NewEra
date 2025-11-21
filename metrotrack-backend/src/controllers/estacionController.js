const {
  crearEstacion,
  obtenerEstaciones,
  obtenerEstacionPorId
} = require("../models/estacionModel");

// POST: crear estación
async function crear(req, res) {
  try {
    const { nombre, distrito, latitud, longitud, tipo } = req.body;

    if (!nombre || latitud == null || longitud == null) {
      return res.status(400).json({
        ok: false,
        message: "Nombre, latitud y longitud son obligatorios"
      });
    }

    const estacion = await crearEstacion({ nombre, distrito, latitud, longitud, tipo });

    res.json({ ok: true, data: estacion });
  } catch (error) {
    console.error("Error en crear estacion:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: todas las estaciones
async function listar(req, res) {
  try {
    const estaciones = await obtenerEstaciones();
    res.json({ ok: true, data: estaciones });
  } catch (error) {
    console.error("Error listar estaciones:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: estación por id
async function obtener(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ ok: false, message: "ID inválido" });
    }

    const estacion = await obtenerEstacionPorId(id);

    if (!estacion) {
      return res.status(404).json({ ok: false, message: "Estación no encontrada" });
    }

    res.json({ ok: true, data: estacion });
  } catch (error) {
    console.error("Error obtener estacion:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

module.exports = {
  crear,
  listar,
  obtener
};
