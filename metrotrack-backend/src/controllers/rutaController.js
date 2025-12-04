const {
  crearRuta,
  obtenerRutas,
  obtenerEstacionesPorRutaId,
} = require("../models/rutaModel");

// POST: Crear ruta
async function crear(req, res) {
  try {
    const { nombre, tipo } = req.body;

    if (!nombre) {
      return res.status(400).json({
        ok: false,
        message: "El nombre es obligatorio",
      });
    }

    const ruta = await crearRuta({ nombre, tipo });
    res.json({ ok: true, data: ruta });
  } catch (error) {
    console.error("Error crear ruta:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: todas las rutas
async function listar(req, res) {
  try {
    const rutas = await obtenerRutas();
    res.json({ ok: true, data: rutas });
  } catch (error) {
    console.error("Error listar rutas:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: obtener ruta por id
async function obtener(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ ok: false, message: "ID inválido" });
    }

    const ruta = await obtenerRutaPorId(id);

    if (!ruta) {
      return res.status(404).json({ ok: false, message: "Ruta no encontrada" });
    }

    res.json({ ok: true, data: ruta });

  } catch (error) {
    console.error("Error obtener ruta:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}





// GET: ruta por id
async function obtenerEstacionesPorRuta(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ ok: false, message: "ID inválido" });
    }

    const estaciones = await obtenerEstacionesPorRutaId(id);

    res.json({
      ok: true,
      data: estaciones
    });
  } catch (error) {
    console.error("Error obtener estaciones de ruta:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

module.exports = {
  crear,
  listar,
  obtener,
  obtenerEstacionesPorRuta
};