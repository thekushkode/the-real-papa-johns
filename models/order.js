'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    customerId: DataTypes.INTEGER,
    appetizer: DataTypes.INTEGER,
    pizza: DataTypes.INTEGER,
    dessert: DataTypes.INTEGER,
    total: DataTypes.NUMERIC
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.Users, {foreignKey: 'customerId'});
    Orders.hasMany(models.Pizzas, {foreignKey: 'pizzas'});
    Orders.hasMany(models.Desserts, {foreignKey: 'desserts'});
    Orders.hasMany(models.Appetizers, {foreignKey: 'appetizers'});
  };
  return Orders;
};