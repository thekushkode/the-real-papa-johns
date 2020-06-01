'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Desserts', [{
        item: `Chocolate Chip Cookie "Pizza"`,
        description: `Kinda like a pizza-- except it's a chocolate chip cookie!`,
        price: 4.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: `Double Chocolate Chip Brownie"`,
        description: `Moist chocolate brownie riddled with chocolate chip shrapnel. LOL!`,
        price: 4.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Desserts', null, {});
  }
};
