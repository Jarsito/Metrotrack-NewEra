const express = require("express");
const router = express.Router();
const { obtenerPorRuta, asignar } = require("../controllers/estacionRutaController");

// GET estaciones ordenadas de una ruta
router.get("/:rutaId", obtenerPorRuta);

// POST asignar estación a ruta
router.post("/", asignar);

module.exports = router;
