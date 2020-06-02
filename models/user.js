'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    ccNum: DataTypes.STRING,
    ccExp: DataTypes.STRING,
    ccCode: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Orders, {foreignKey: 'customerId', as: 'user'});
  };
  return Users;
};