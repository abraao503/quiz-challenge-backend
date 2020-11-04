'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('questionnaires', 
  [
    {
      name: 'What are all of Mobiliza core values?',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('questionnaires', null, {}),
};
