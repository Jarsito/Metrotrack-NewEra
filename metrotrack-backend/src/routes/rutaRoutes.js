const express = require("express");
const router = express.Router();
const { crear, listar, obtener } = require("../controllers/rutaController");

router.post("/", crear);     // Crear ruta
router.get("/", listar);     // Obtener todas
router.get("/:id", obtener); // Obtener una

module.exports = router;
