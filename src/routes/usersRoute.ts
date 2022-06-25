// import { Router } from 'express';
// import { UsersController } from '@controllers';
// import { Routes } from '@interfaces';
// import { validationMiddleware, authMiddleware } from '@middlewares';
// import { CreateUserDto } from '@dtos';

// class UsersRoute implements Routes {
//   public path = '/users';

//   public router = Router();

//   public usersController = new UsersController();

//   constructor() {
//     this.initializeRoutes();
//   }

//   private initializeRoutes() {
//     this.router.get(`${this.path}`, this.usersController.getUsers);
//     this.router.get(`${this.path}/:id(\\d+)`, authMiddleware, this.usersController.getUserById);
//     this.router.post(`${this.path}`, authMiddleware, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
//     this.router.put(`${this.path}/:id(\\d+)`, authMiddleware, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
//     this.router.delete(`${this.path}/:id(\\d+)`, authMiddleware, this.usersController.deleteUser);
//   }
// }

// export default UsersRoute;

import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getUsersController,
  logInController,
  logOutController,
  updateUserController,
} from '@controllers';
import { authMiddleware, validationMiddleware } from '@/middlewares';
import { CreateUserDto } from '@/dtos';

const UsersRoute = Router();
const path = '/users';

// Create
UsersRoute.post(`${path}`, validationMiddleware(CreateUserDto, 'body'), createUserController);
UsersRoute.post(`${path}/login`, validationMiddleware(CreateUserDto, 'body'), logInController);

// Read
UsersRoute.get(`${path}`, getUsersController);
UsersRoute.get(`${path}/:id(\\d+)`, getUserByIdController);

// Update
UsersRoute.put(`${path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), updateUserController);

// Delete
UsersRoute.delete(`${path}/:id(\\d+)`, deleteUserController);
UsersRoute.post(`${path}/logout`, authMiddleware, logOutController);

export default UsersRoute;
