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
      },
    {
      type: 'Pepperoni',
        size: 'Large',
        description: `Layers of the finest pepperoni make this pizza a can't miss!`,
        price: 10.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
    {
      type: 'Garden',
        size: 'Large',
        description: 'Tomato, black olive, onion, bell pepper, mushroom, spinach & garlic.',
        price: 10.99,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      type: 'Meat Lovers',
        size: 'Large',
        description: 'Sausage, Pepperoni, Ground Beef, Chicken',
        price: 12.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pizzas', null, {});
  }
};
