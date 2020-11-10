import 'dotenv/config';

module.exports = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  entities: [
    'dist/src/models/*',
  ],
  migrations: [
    'dist/src/database/migrations/*ts',
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
