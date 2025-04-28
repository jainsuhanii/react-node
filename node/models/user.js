const {DataTypes} = require("sequelize");
const sequelize = require(".");
let User = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
},{
        timestamps: false,
        collate: 'utf8mb4_unicode_ci',
        indexes: [
          {
            unique: true,
            fields: ['email']
          }
        ]
    });

module.exports = User