const { sql, getConnection } = require("../config/db");

// Insertar nueva ubicación
async function crearUbicacion({ usuarioId, lat, lng }) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("UsuarioId", sql.Int, usuarioId)
    .input("Latitud", sql.Decimal(10, 7), lat)
    .input("Longitud", sql.Decimal(10, 7), lng)
    .query(`
      INSERT INTO Ubicaciones (UsuarioId, Latitud, Longitud)
      VALUES (@UsuarioId, @Latitud, @Longitud)
    `);

  return result.rowsAffected[0] === 1;
}

// Obtener última ubicación de un usuario
async function obtenerUltimaUbicacion(usuarioId) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("UsuarioId", sql.Int, usuarioId)
    .query(`
      SELECT TOP 1 Id, UsuarioId, Latitud, Longitud, Fecha
      FROM Ubicaciones
      WHERE UsuarioId = @UsuarioId
      ORDER BY Id DESC
    `);

  return result.recordset[0] || null;
}

module.exports = {
  crearUbicacion,
  obtenerUltimaUbicacion,
};
