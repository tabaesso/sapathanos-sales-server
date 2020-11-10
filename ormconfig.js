module.exports = {
  "type": 'postgres',
  "url": process.env.DATABASE_URL,
  "entities": [
    "dist/src/models/*",
  ],
  "migrations": [
    "dist/src/database/migrations/*",
  ],
  "cli": {
    "migrationsDir": 'src/database/migrations',
  },
};
