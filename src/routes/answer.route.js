const { Router } = require('express');
const answerController = require('../controllers/answer.controller');
const { answerValidation } = require('../validation/answer.validation');

const answerRouter = Router();

answerRouter.post('/:questionnaireId', answerValidation, answerController.store);

module.exports = answerRouter; 