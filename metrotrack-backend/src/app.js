const express = require("express");
const cors = require("cors");

const ubicacionRoutes = require("./routes/ubicacionRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const estacionRoutes = require("./routes/estacionRoutes");
const rutaRoutes = require("./routes/rutaRoutes");
const busRoutes = require("./routes/busRoutes");
const tarifaRoutes = require("./routes/tarifaRoutes");
const estacionRutaRoutes = require("./routes/estacionRutaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ubicaciones", ubicacionRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/estaciones", estacionRoutes);
app.use("/api/rutas", rutaRoutes);
app.use("/api/buses", busRoutes);
app.use("/api/tarifas", tarifaRoutes);
app.use("/api/estacion-ruta", estacionRutaRoutes);


app.get("/", (req, res) => {
  res.send("API MetroTrack backend funcionando ✅");
});

module.exports = app;
