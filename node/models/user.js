// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("./db");

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  collate: 'utf8mb4_unicode_ci'
});

module.exports = User;
