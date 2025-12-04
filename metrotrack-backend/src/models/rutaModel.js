const { sql, getConnection } = require("../config/db");

// Crear ruta
async function crearRuta({ nombre, tipo, descripcion }) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Nombre", sql.NVarChar, nombre)
    .input("Tipo", sql.NVarChar, tipo)
    .input("Descripcion", sql.NVarChar, descripcion)
    .query(`
      INSERT INTO Rutas (Nombre, Tipo, Descripcion)
      OUTPUT INSERTED.*
      VALUES (@Nombre, @Tipo, @Descripcion)
    `);

  return result.recordset[0];
}

// Obtener todas las rutas
async function obtenerRutas() {
  const pool = await getConnection();

  const result = await pool.request().query(`
      SELECT * FROM Rutas ORDER BY Id ASC
  `);

  return result.recordset;
}

// Obtener ruta por ID (❗ ESTA FALTABA)
async function obtenerRutaPorId(id) {
  const pool = await getConnection();

  const result = await pool.request()
    .input("Id", sql.Int, id)
    .query(`
      SELECT * FROM Rutas WHERE Id = @Id
    `);

  return result.recordset[0];
}

// Obtener estaciones de una ruta
async function obtenerEstacionesPorRutaId(rutaId) {
  const pool = await getConnection();

  const result = await pool.request()
    .input("RutaId", sql.Int, rutaId)
    .query(`
      SELECT 
        er.Orden,
        e.Id AS EstacionId,
        e.Nombre,
        e.Distrito,
        e.Latitud,
        e.Longitud,
        e.Tipo
      FROM Estacion_Ruta er
      INNER JOIN Estaciones e ON er.EstacionId = e.Id
      WHERE er.RutaId = @RutaId
      ORDER BY er.Orden ASC
    `);

  return result.recordset;
}

module.exports = {
  crearRuta,
  obtenerRutas,
  obtenerRutaPorId,
  obtenerEstacionesPorRutaId
};
