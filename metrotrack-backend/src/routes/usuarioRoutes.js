const express = require("express");
const router = express.Router();
const { crear, listar, obtener } = require("../controllers/usuarioController");

router.post("/", crear);          // Crear usuario
router.get("/", listar);          // Obtener todos
router.get("/:id", obtener);      // Obtener uno

module.exports = router;
