module.exports = {
  "type": 'postgres',
  "url": process.env.DATABASE_URL,
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
