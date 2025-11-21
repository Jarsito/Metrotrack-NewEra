const { sql, getConnection } = require("../config/db");

// Crear bus
async function crearBus({ codigoBus, placa, estado }) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("CodigoBus", sql.NVarChar, codigoBus)
    .input("Placa", sql.NVarChar, placa)
    .input("Estado", sql.NVarChar, estado)
    .query(`
      INSERT INTO Buses (CodigoBus, Placa, Estado)
      OUTPUT INSERTED.*
      VALUES (@CodigoBus, @Placa, @Estado)
    `);

  return result.recordset[0];
}

// Obtener todos los buses
async function obtenerBuses() {
  const pool = await getConnection();
  const result = await pool.request().query(`
      SELECT * FROM Buses ORDER BY Id ASC
  `);
  return result.recordset;
}

// Obtener bus por ID
async function obtenerBusPorId(id) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Id", sql.Int, id)
    .query(`
      SELECT * FROM Buses WHERE Id = @Id
    `);

  return result.recordset[0];
}

module.exports = {
  crearBus,
  obtenerBuses,
  obtenerBusPorId,
};
