'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Orders', // name of Source table
      'customerId', // name of the key we're adding
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users', // name of Target table
          key: 'id', // key in Target table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Orders', // name of Source table
      'customerId' // key we want to remove
    );
  }
};

