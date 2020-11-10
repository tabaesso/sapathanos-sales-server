module.exports = {
  "type": 'postgres',
  "url": process.env.DATABASE_URL,
  "entities": [
    "./src/models/**/*.js",
  ],
  "migrations": [
    "./src/database/migrations/**/*.js",
  ],
  "cli": {
    "migrationsDir": 'src/database/migrations',
  },
};
