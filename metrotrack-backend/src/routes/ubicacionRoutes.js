const express = require("express");
const router = express.Router();
const {
  guardarUbicacion,
  obtenerUltima,
} = require("../controllers/ubicacionController");

// POST: guardar ubicación
router.post("/", guardarUbicacion);

// GET: última ubicación por usuario
router.get("/ultima/:usuarioId", obtenerUltima);

module.exports = router;
