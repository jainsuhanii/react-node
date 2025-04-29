// db.js
const { Sequelize } = require("sequelize");
const CONFIG = require("./config");

// DB Connection
const sequelize = new Sequelize(CONFIG.database.db, CONFIG.database.user, CONFIG.database.password, {
  host: CONFIG.database.host,
  dialect: CONFIG.database.dialect,
  logging: CONFIG.database.logging,
  timezone: "+00:00",
  pool: {
    max: CONFIG.database.pool.max,
    min: CONFIG.database.pool.min,
    acquire: CONFIG.database.pool.acquire,
    idle: CONFIG.database.pool.idle
  }
});

module.exports = sequelize;
