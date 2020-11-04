'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('scores', 
  [
    {
      points: 25,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      points: 50,
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      points: 75,
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('scores', null, {}),
};
