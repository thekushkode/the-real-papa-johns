'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        name: 'Bubba Kushner',
        phone: '4046973803',
        address: '1234 Kush Ave ATL, GA 30305',
        ccNum: '1234567890456783',
        ccExp: '1024',
        ccCode: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
