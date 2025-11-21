const { sql, getConnection } = require("../config/db");

// Crear estación
async function crearEstacion({ nombre, distrito, latitud, longitud, tipo }) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Nombre", sql.NVarChar, nombre)
    .input("Distrito", sql.NVarChar, distrito)
    .input("Latitud", sql.Decimal(10,7), latitud)
    .input("Longitud", sql.Decimal(10,7), longitud)
    .input("Tipo", sql.NVarChar, tipo)
    .query(`
      INSERT INTO Estaciones (Nombre, Distrito, Latitud, Longitud, Tipo)
      OUTPUT INSERTED.*
      VALUES (@Nombre, @Distrito, @Latitud, @Longitud, @Tipo)
    `);

  return result.recordset[0];
}

// Obtener todas las estaciones
async function obtenerEstaciones() {
  const pool = await getConnection();

  const result = await pool.request().query(`
      SELECT * FROM Estaciones ORDER BY Id ASC
  `);

  return result.recordset;
}

// Obtener estación por ID
async function obtenerEstacionPorId(id) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Id", sql.Int, id)
    .query(`
      SELECT * FROM Estaciones WHERE Id = @Id
    `);

  return result.recordset[0];
}

module.exports = {
  crearEstacion,
  obtenerEstaciones,
  obtenerEstacionPorId,
};
