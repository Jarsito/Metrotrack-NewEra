const { sql, getConnection } = require("../config/db");

// Crear ruta
async function crearRuta({ nombre, tipo }) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Nombre", sql.NVarChar, nombre)
    .input("Tipo", sql.NVarChar, tipo)
    .query(`
      INSERT INTO Rutas (Nombre, Tipo)
      OUTPUT INSERTED.*
      VALUES (@Nombre, @Tipo)
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

// Obtener ruta por ID
async function obtenerRutaPorId(id) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Id", sql.Int, id)
    .query(`
      SELECT * FROM Rutas WHERE Id = @Id
    `);

  return result.recordset[0];
}

module.exports = {
  crearRuta,
  obtenerRutas,
  obtenerRutaPorId,
};
