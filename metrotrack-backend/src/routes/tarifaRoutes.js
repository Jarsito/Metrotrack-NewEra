const express = require("express");
const router = express.Router();
const { crear, listar, obtener } = require("../controllers/tarifaController");

router.post("/", crear);      // Crear tarifa
router.get("/", listar);      // Listar tarifas
router.get("/:id", obtener);  // Obtener tarifa

module.exports = router;
