"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chatModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chatModel.init(
    {
      chatName: {
        type: STRING,
        trim: true,
      },
      isGroupChat: {
        type: boolean,
        default: false,
      },
    },
    {
      sequelize,
      modelName: "chatModel",
    },
    {
      timestamps: true,
    }
  );
  return chatModel;
};
