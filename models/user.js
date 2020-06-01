'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    ccNum: DataTypes.INTEGER,
    ccExp: DataTypes.INTEGER,
    ccCode: DataTypes.INTEGER
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Orders, {foreignKey: 'customerId'});
  };
  return Users;
};