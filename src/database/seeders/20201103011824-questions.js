'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('questions', 
  [
    {
      content: '#tamojunto',
      is_correct: true,
      questionnaire_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      content: '#aprendemosParaCrescer',
      is_correct: true,
      questionnaire_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      content: '#entregamosUAU',
      is_correct: true,
      questionnaire_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      content: '#somosMobilizadores',
      is_correct: true,
      questionnaire_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      content: '#expertiseNaGestaoDeProjetos',
      is_correct: false,
      questionnaire_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('questions', null, {}),
};
