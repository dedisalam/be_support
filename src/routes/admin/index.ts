import { Router } from 'express';
import UserRoute from './user';

const AdminRoute = Router();
const path = '/admin';

AdminRoute.use(path, UserRoute);

export default AdminRoute;
