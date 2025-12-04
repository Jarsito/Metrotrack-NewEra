const express = require("express");
const router = express.Router();
const { crear, listar, obtener, obtenerEstacionesPorRuta } = require("../controllers/rutaController");

router.post("/", crear);
router.get("/", listar);
router.get("/:id", obtener);
router.get("/:id/estaciones", obtenerEstacionesPorRuta);

module.exports = router;
