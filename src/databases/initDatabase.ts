import mysql from 'mysql2';
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '@/config';

const connection = mysql.createConnection({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
});

export default connection;
