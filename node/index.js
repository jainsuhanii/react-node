const express = require('express');
const app = express();  
const port = 3000;
const routes = require('./routes');
const sequelize = require("./models/db");
const User = require("./models/user");

sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});