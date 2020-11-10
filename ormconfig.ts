import path from 'path';
import 'dotenv/config';

module.exports = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  entities: [
    path.resolve(__dirname, 'src', 'models', '*')
  ],
  migrations: [
    path.resolve(__dirname, 'src', 'database', 'migrations', '*')
  ],
  cli: {
    migrationsDir: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
};
