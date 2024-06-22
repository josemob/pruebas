import pg from "pg"; // Importamos el módulo pg para trabajar con PostgreSQL
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js"; // Importamos la configuración de la base de datos

// Creamos un pool de conexiones a la base de datos PostgreSQL
export const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});
