import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, logIn, logOut, updateUser } from '@controllers/admin/user';
import { authMiddleware, validationMiddleware } from '@middlewares';
import { CreateUserDto as CD } from '@dtos/admin';

const User = Router();
const path = '/user';

// Create
User.post(`${path}`, authMiddleware, validationMiddleware(CD, 'body'), createUser);
User.post(`${path}/login`, validationMiddleware(CD, 'body'), logIn);

// Read
User.get(`${path}s`, authMiddleware, getUsers);
User.get(`${path}/:id(\\d+)`, authMiddleware, getUserById);

// Update
User.put(`${path}/:id(\\d+)`, authMiddleware, validationMiddleware(CD, 'body', true), updateUser);

// Delete
User.delete(`${path}/:id(\\d+)`, authMiddleware, deleteUser);
User.post(`${path}/logout`, authMiddleware, logOut);

export default User;
