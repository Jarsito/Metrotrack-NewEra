const {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId
} = require("../models/usuarioModel");

// POST: crear usuario
async function crear(req, res) {
  try {
    const { nombre, email, tipoUsuario } = req.body;

    if (!nombre) {
      return res.status(400).json({ ok: false, message: "El nombre es obligatorio" });
    }

    const usuario = await crearUsuario({ nombre, email, tipoUsuario });

    res.json({ ok: true, data: usuario });
  } catch (error) {
    console.error("Error en crear usuario:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: obtener todos
async function listar(req, res) {
  try {
    const usuarios = await obtenerUsuarios();
    res.json({ ok: true, data: usuarios });
  } catch (error) {
    console.error("Error listar usuarios:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

// GET: obtener uno por id
async function obtener(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ ok: false, message: "ID inválido" });
    }

    const usuario = await obtenerUsuarioPorId(id);

    if (!usuario) {
      return res.status(404).json({ ok: false, message: "Usuario no encontrado" });
    }

    res.json({ ok: true, data: usuario });
  } catch (error) {
    console.error("Error obtener usuario:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

module.exports = {
  crear,
  listar,
  obtener
};
