'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Appetizers', [{
      item: 'Garlic Knots',
      description: `Our delicious dough tied in a knot and covered in EVOO & Garlic. You're welcome!`,
      price: 4.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Cheesey Bread',
      description: `You'll be in love at first bite with our dank ass cheesey bread`,
      price: 5.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Boneless Wings',
      description: `Juicy, tender chicken nuggets breaded and covered in our tangy buffalo sauce!`,
      price: 6.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Appetizers', null, {});
  }
};
