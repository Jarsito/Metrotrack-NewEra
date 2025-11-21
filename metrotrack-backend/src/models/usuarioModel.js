const { sql, getConnection } = require("../config/db");

// Crear usuario
async function crearUsuario({ nombre, email, tipoUsuario }) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Nombre", sql.NVarChar, nombre)
    .input("Email", sql.NVarChar, email)
    .input("TipoUsuario", sql.NVarChar, tipoUsuario)
    .query(`
        INSERT INTO Usuarios (Nombre, Email, TipoUsuario)
        OUTPUT INSERTED.*
        VALUES (@Nombre, @Email, @TipoUsuario)
    `);

  return result.recordset[0];
}

// Obtener todos los usuarios
async function obtenerUsuarios() {
  const pool = await getConnection();

  const result = await pool.request().query(`
      SELECT * FROM Usuarios ORDER BY Id ASC
  `);

  return result.recordset;
}

// Obtener usuario por ID
async function obtenerUsuarioPorId(id) {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Id", sql.Int, id)
    .query(`
      SELECT * FROM Usuarios WHERE Id = @Id
    `);

  return result.recordset[0];
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
};
