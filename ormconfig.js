console.log(process.env.NODE_ENV ? process.env.TYPEORM_ENTITIES: "dist/models/**/*.js");
console.log(process.env.NODE_ENV ? process.env.TYPEORM_MIGRATIONS: "dist/migrations/**/*.js");
console.log(process.env.NODE_ENV ? process.env.TYPEORM_MIGRATIONS_DIR: "dist/migrations/");

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "synchronize": false,
  "entities": [
    process.env.NODE_ENV ? process.env.TYPEORM_ENTITIES: "dist/models/**/*.js"
 ],
 "migrations": [
    process.env.NODE_ENV ? process.env.TYPEORM_MIGRATIONS: "dist/migrations/**/*.js"
],
 "cli":{
  "migrationsDir": [
    process.env.NODE_ENV ? process.env.TYPEORM_MIGRATIONS_DIR: "dist/migrations/"
  ],
  "entitiesDir": process.env.NODE_ENV ? process.env.TYPEORM_ENTITIES_DIR: "src/models"
  }
}
