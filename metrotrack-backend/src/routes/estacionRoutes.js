const express = require("express");
const router = express.Router();
const { crear, listar, obtener } = require("../controllers/estacionController");

router.post("/", crear);      // Crear estación
router.get("/", listar);      // Listar todas
router.get("/:id", obtener);  // Obtener una

module.exports = router;
