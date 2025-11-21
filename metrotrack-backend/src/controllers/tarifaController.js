const {
  crearTarifa,
  obtenerTarifas,
  obtenerTarifaPorId
} = require("../models/tarifaModel");

// POST: crear tarifa
async function crear(req, res) {
  try {
    const { tipoUsuario, precio } = req.body;

    if (!tipoUsuario || precio == null) {
      return res.status(400).json({
        ok: false,
        message: "tipoUsuario y precio son obligatorios"
      });
    }

    const tarifa = await crearTarifa({ tipoUsuario, precio });
    res.json({ ok: true, data: tarifa });

  } catch (error) {
    console.error("Error crear tarifa:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: todas las tarifas
async function listar(req, res) {
  try {
    const tarifas = await obtenerTarifas();
    res.json({ ok: true, data: tarifas });
  } catch (error) {
    console.error("Error listar tarifas:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: tarifa por ID
async function obtener(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ ok: false, message: "ID inválido" });
    }

    const tarifa = await obtenerTarifaPorId(id);

    if (!tarifa) {
      return res.status(404).json({ ok: false, message: "Tarifa no encontrada" });
    }

    res.json({ ok: true, data: tarifa });

  } catch (error) {
    console.error("Error obtener tarifa:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

module.exports = {
  crear,
  listar,
  obtener
};
