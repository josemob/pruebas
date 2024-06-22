import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/index.controller.js";


// Creamos un objeto Router de Express.js
const router = Router();

router.get("/users", getUsers); // Ruta para obtener una lista de todos los usuarios
router.get("/users/:id", getUserById); // Ruta para obtener un usuario específico por su ID
router.post("/users", createUser); // Ruta para agregar un nuevo usuario
router.put("/users/:id", updateUser); // Ruta para actualizar un usuario existente
router.delete("/users/:id", deleteUser); // Ruta para eliminar un usuario existente

export default router; // Exportamos el objeto Router
