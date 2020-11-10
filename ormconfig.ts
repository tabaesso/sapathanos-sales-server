import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

export = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [
    './src/models/*ts',
  ],
  migrations: [
    './src/database/migrations/*ts',
  ],
  cli: {
    migrationsDir: './src/database/migrations'
  },
};
