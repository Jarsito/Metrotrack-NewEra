const { sql, getConnection } = require("../config/db");

// Obtener estaciones por ruta (orden real)
async function obtenerEstacionesPorRuta(rutaId) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("RutaId", sql.Int, rutaId)
    .query(`
      SELECT er.Orden, e.*
      FROM Estacion_Ruta er
      INNER JOIN Estaciones e ON er.EstacionId = e.Id
      WHERE er.RutaId = @RutaId
      ORDER BY er.Orden ASC
    `);

  return result.recordset;
}

// Asignar estación a ruta
async function asignarEstacion({ rutaId, estacionId, orden }) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("RutaId", sql.Int, rutaId)
    .input("EstacionId", sql.Int, estacionId)
    .input("Orden", sql.Int, orden)
    .query(`
      INSERT INTO Estacion_Ruta (RutaId, EstacionId, Orden)
      OUTPUT INSERTED.*
      VALUES (@RutaId, @EstacionId, @Orden)
    `);

  return result.recordset[0];
}

module.exports = {
  obtenerEstacionesPorRuta,
  asignarEstacion
};
