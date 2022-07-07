import { Router } from 'express';
import Dashboard from './dashboard';
import User from './user';

const Admin = Router();
const path = '/admin';

Admin.use(`${path}`, Dashboard);
Admin.use(`${path}`, User);

export default Admin;
