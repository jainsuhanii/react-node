const { Sequelize } = require("sequelize");

const db = {};
//Database Connection Build
const CONFIG = {
  database: {
    host: "localhost",
    user: "root",
    password:"admin",
    db: "todoApp",
    dialect: "mysql",
    logging: false,
    pool: {
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    }
  }
}

//DB Connection
const sequelize = new Sequelize(CONFIG.database.db, CONFIG.database.user, CONFIG.database.password, {
  host: CONFIG.database.host,
  dialect: CONFIG.database.dialect,
  logging: CONFIG.database.logging == 'true',
  dialectOptions: {
  },
  timezone: "+00:00",
  pool: {
    max: CONFIG.database.pool.max,
    min: CONFIG.database.pool.min,
    acquire: CONFIG.database.pool.acquire,
    idle: CONFIG.database.pool.idle
  }
})
console.log("Database Connected")
module.exports = sequelize