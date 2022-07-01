import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, logIn, logOut, updateUser } from '@controllers/admin/user';
import { authMiddleware, validationMiddleware } from '@middlewares';
import { CreateUserDto } from '@dtos';

const UserRoute = Router();
const path = '/user';

// Create
UserRoute.post(`${path}`, authMiddleware, validationMiddleware(CreateUserDto, 'body'), createUser);
UserRoute.post(`${path}/login`, authMiddleware, validationMiddleware(CreateUserDto, 'body'), logIn);

// Read
UserRoute.get(`${path}s`, authMiddleware, getUsers);
UserRoute.get(`${path}/:id(\\d+)`, authMiddleware, getUserById);

// Update
UserRoute.put(`${path}/:id(\\d+)`, authMiddleware, validationMiddleware(CreateUserDto, 'body', true), updateUser);

// Delete
UserRoute.delete(`${path}/:id(\\d+)`, authMiddleware, deleteUser);
UserRoute.post(`${path}/logout`, authMiddleware, logOut);

export default UserRoute;
