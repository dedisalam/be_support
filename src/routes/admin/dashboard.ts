import { Router } from 'express';
import { authMiddleware } from '@middlewares';
import { Read } from '@controllers/admin/dashboard';

const Dashboard = Router();
const path = '/dashboard';

// Read
Dashboard.get(`${path}`, authMiddleware, Read);

export default Dashboard;
