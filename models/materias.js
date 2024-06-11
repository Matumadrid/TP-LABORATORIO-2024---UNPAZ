'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Materias extends Model {
    static associate(models) {
      // define association here
    }
  }
  Materias.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carreraId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize, // Sequelize instance should be passed here
    modelName: 'Materias', // Model name should be defined here
    tableName: 'materias', // Optionally, specify the table name if different
    timestamps: false // Optionally, specify if timestamps are not used
  });
  return Materias;
};
