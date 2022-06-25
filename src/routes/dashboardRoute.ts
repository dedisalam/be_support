import { getDashboardController } from '@controllers';
import { Router } from 'express';

const DashboardRoute = Router();
const path = '/';

// Read
DashboardRoute.get(`${path}`, getDashboardController);

export default DashboardRoute;
