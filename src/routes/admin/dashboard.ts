import { Admin } from "@controllers";
import { Router } from "express";

const Dashboard = Router();
const path = "/dashboard";

// Read
Dashboard.get(`${path}`, Admin.Dashboard.Read);

export default Dashboard;
