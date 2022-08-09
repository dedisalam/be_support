import {
  Create,
  Delete,
  Login,
  Logout,
  Read,
  ReadById,
  Update,
} from "@controllers/admin/user";
import { User as UD } from "@dtos/admin/user";
import { authMiddleware, validationMiddleware } from "@middlewares";
import { Router } from "express";

const User = Router();
const path = "/user";

// Create
User.post(`${path}`, authMiddleware, validationMiddleware(UD, "body"), Create);
User.post(`${path}/login`, validationMiddleware(UD, "body"), Login);

// Read
User.get(`${path}s`, authMiddleware, Read);
User.get(`${path}/:id(\\d+)`, authMiddleware, ReadById);

// Update
User.put(
  `${path}/:id(\\d+)`,
  authMiddleware,
  validationMiddleware(UD, "body", true),
  Update,
);

// Delete
User.delete(`${path}/:id(\\d+)`, authMiddleware, Delete);
User.post(`${path}/logout`, authMiddleware, Logout);

export default User;
