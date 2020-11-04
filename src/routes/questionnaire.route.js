const { Router } = require('express');
const questionnaireController = require('../controllers/questionnaire.controller');

const questionnaireRouter = Router();

questionnaireRouter.get('/:questionnaireId', questionnaireController.show);

module.exports = questionnaireRouter; 