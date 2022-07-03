import { Router } from 'express';
import User from './user';

const Admin = Router();
const path = '/admin';

Admin.use(path, User);

export default Admin;
