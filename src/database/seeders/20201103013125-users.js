'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', 
  [
    {
      name: 'Steve',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'John',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Lisa',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
