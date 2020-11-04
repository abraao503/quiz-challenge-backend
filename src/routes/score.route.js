const { Router } = require('express');
const scoreController = require('../controllers/score.controller');

const scoreRouter = Router();

scoreRouter.get('/', scoreController.index);

module.exports = scoreRouter; 