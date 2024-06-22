import { pool } from "../db.js";

// Función para obtener una lista de todos los usuarios en la base de datos
export const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users ORDER BY id ASC");
  res.status(200).json(response.rows);
};

// Función para obtener un usuario específico por su ID
export const getUserById = async (req, res) => {
  // Verifica si el ID proporcionado es un número entero
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

     // Log para verificar el valor de id
    console.log(`Executing query with id: ${id}`); // Log para verificar el valor de id

    // Ejecuta una consulta SQL que selecciona el usuario con el ID especificado
    const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (response.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(response.rows[0]); // Assuming you want to return a single user object
  } catch (error) {
    console.error('Error executing query:', error); // Log para capturar el error exacto
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const { rows } = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    res.status(201).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const { rows } = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [name, email, id]
  );

    // Devuelve el objeto del usuario actualizado en formato JSON
  return res.json(rows[0]);
};

// Función para eliminar un usuario existente de la base de datos
export const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { rowCount } = await pool.query("DELETE FROM users where id = $1", [
    id,
  ]);

  // Verifica si el usuario se eliminó correctamente
  if (rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  }

   // Devuelve un código de estado HTTP 204 (No Content)
  return res.sendStatus(204);
};
