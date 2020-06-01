'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appetizers = sequelize.define('Appetizers', {
    item: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {});
  Appetizers.associate = function(models) {
    Appetizers.belongsTo(models.Orders, {foreignKey: 'appetizers'});
  };
  return Appetizers;
};