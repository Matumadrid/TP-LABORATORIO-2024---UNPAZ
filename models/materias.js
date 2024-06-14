'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Materias extends Model {
    static associate(models) {
      Materias.belongsTo(models.Carreras, {as: 'carreras', foreignKey:'carreraId'})
    }
  }
  Materias.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuatrimestral: {
      type: DataTypes.TINYINT,
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
