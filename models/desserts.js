'use strict';
module.exports = (sequelize, DataTypes) => {
  const Desserts = sequelize.define('Desserts', {
    item: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {});
  Desserts.associate = function(models) {
    Desserts.belongsTo(models.Orders, {foreignKey: 'desserts'});
  };
  return Desserts;
};