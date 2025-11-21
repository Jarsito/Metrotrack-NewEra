const {
  crearUbicacion,
  obtenerUltimaUbicacion,
} = require("../models/ubicacionModel");

// POST /api/ubicaciones
async function guardarUbicacion(req, res) {
  try {
    const { usuarioId, lat, lng } = req.body;

    if (!usuarioId || lat == null || lng == null) {
      return res.status(400).json({
        ok: false,
        message: "usuarioId, lat y lng son obligatorios",
      });
    }

    const ok = await crearUbicacion({ usuarioId, lat, lng });

    if (ok) {
      res.json({ ok: true, message: "Ubicación guardada correctamente" });
    } else {
      res.status(500).json({ ok: false, message: "No se pudo guardar" });
    }
  } catch (error) {
    console.error("Error en guardarUbicacion:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET /api/ubicaciones/ultima/:usuarioId
async function obtenerUltima(req, res) {
  try {
    const usuarioId = parseInt(req.params.usuarioId, 10);

    if (Number.isNaN(usuarioId)) {
      return res.status(400).json({ ok: false, message: "usuarioId inválido" });
    }

    const ubicacion = await obtenerUltimaUbicacion(usuarioId);

    if (!ubicacion) {
      return res.status(404).json({
        ok: false,
        message: "No hay ubicaciones para este usuario",
      });
    }

    res.json({ ok: true, data: ubicacion });
  } catch (error) {
    console.error("Error en obtenerUltima:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

module.exports = {
  guardarUbicacion,
  obtenerUltima,
};
