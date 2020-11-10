module.exports = {
  "type": 'postgres',
  "host": process.env.PG_HOST,
  "port": process.env.PG_PORT,
  "username": process.env.PG_USER,
  "password": process.env.PG_PASSWORD,
  "database": process.env.PG_DATABASE,
  "entities": [
    "./dist/models/models/*js",
  ],
  "migrations": [
    "./dist/database/migrations/*js",
  ],
  "cli": {
    "migrationsDir": 'src/database/migrations',
  },
};
