const {
  crearBus,
  obtenerBuses,
  obtenerBusPorId
} = require("../models/busModel");

// POST: Crear bus
async function crear(req, res) {
  try {
    const { codigoBus, placa, estado } = req.body;

    if (!codigoBus || !placa) {
      return res.status(400).json({
        ok: false,
        message: "codigoBus y placa son obligatorios"
      });
    }

    const bus = await crearBus({ codigoBus, placa, estado });
    res.json({ ok: true, data: bus });

  } catch (error) {
    console.error("Error crear bus:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: todos los buses
async function listar(req, res) {
  try {
    const buses = await obtenerBuses();
    res.json({ ok: true, data: buses });
  } catch (error) {
    console.error("Error listar buses:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: bus por ID
async function obtener(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ ok: false, message: "ID inválido" });
    }

    const bus = await obtenerBusPorId(id);

    if (!bus) {
      return res.status(404).json({ ok: false, message: "Bus no encontrado" });
    }

    res.json({ ok: true, data: bus });

  } catch (error) {
    console.error("Error obtener bus:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

module.exports = {
  crear,
  listar,
  obtener
};
