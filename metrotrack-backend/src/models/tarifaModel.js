const { sql, getConnection } = require("../config/db");

// Crear tarifa
async function crearTarifa({ tipoUsuario, precio }) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("TipoUsuario", sql.NVarChar, tipoUsuario)
    .input("Precio", sql.Decimal(10,2), precio)
    .query(`
      INSERT INTO Tarifas (TipoUsuario, Precio)
      OUTPUT INSERTED.*
      VALUES (@TipoUsuario, @Precio)
    `);

  return result.recordset[0];
}

// Obtener todas las tarifas
async function obtenerTarifas() {
  const pool = await getConnection();
  const result = await pool.request().query(`
      SELECT * FROM Tarifas ORDER BY Id ASC
  `);
  return result.recordset;
}

// Obtener tarifa por ID
async function obtenerTarifaPorId(id) {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", sql.Int, id)
    .query(`
      SELECT * FROM Tarifas WHERE Id = @Id
    `);
  return result.recordset[0];
}

module.exports = {
  crearTarifa,
  obtenerTarifas,
  obtenerTarifaPorId,
};
