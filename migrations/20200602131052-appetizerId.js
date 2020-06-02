'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Orders',
      'appetizer',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Appetizers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Orders',
      'appetizer'
    );
  }
};
