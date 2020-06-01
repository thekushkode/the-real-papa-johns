'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Pizzas', [{
        type: '3-Cheese',
        size: 'Large',
        description: 'Cheesey Goodness',
        price: 9.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pizzas', null, {});
  }
};
