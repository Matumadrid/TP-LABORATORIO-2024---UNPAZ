'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Carreras extends Model {
    static associate(models) {
      // define association here
    }
  }
  Carreras.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    universidad: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize, // Sequelize instance should be passed here
    modelName: 'Carreras', // Model name should be defined here
    tableName: 'carreras', // Optionally, specify the table name if different
    timestamps: false // Optionally, specify if timestamps are not used
  });
  return Carreras;
};