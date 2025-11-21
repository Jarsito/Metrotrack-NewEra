const express = require("express");
const router = express.Router();
const { crear, listar, obtener } = require("../controllers/busController");

router.post("/", crear);     // Crear bus
router.get("/", listar);     // Listar todos los buses
router.get("/:id", obtener); // Obtener un bus

module.exports = router;
