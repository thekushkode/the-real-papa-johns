'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Orders',
      'pizza',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Pizzas',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Orders',
      'pizza'
    );
  }
};
