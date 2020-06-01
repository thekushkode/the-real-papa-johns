'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pizzas = sequelize.define('Pizzas', {
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {});
  Pizzas.associate = function(models) {
    Pizzas.belongsTo(models.Orders, {foreignKey: 'pizzas', as: 'pizza'});
    
  };
  return Pizzas;
};