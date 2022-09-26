"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      avtar: {
        type: DataTypes.STRING,
      },
      tags: {
        type: DataTypes.TEXT,
      },
      social: {
        github: {
          type: DataTypes.STRING,
        },
        stackoverflow: {
          type: DataTypes.STRING,
        },
        linkedin: {
          type: DataTypes.STRING,
        },
        instagram: {
          type: DataTypes.STRING,
        },
        twitter: {
          type: DataTypes.STRING,
        },
        facebook: {
          type: DataTypes.STRING,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    },
    {
      timestamps: true,
    }
  );
  return chatModel;
};
