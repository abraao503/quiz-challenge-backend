const { Router } = require('express');

const answerRouter = require('./answer.route');
const userRouter = require('./user.route');
const scoreRouter = require('./score.route');
const questionnaireRouter = require('./questionnaire.route');

const routes = Router();

routes.use('/answers/', answerRouter);
routes.use('/users/', userRouter);
routes.use('/scores/', scoreRouter);
routes.use('/questionnaires/', questionnaireRouter);

module.exports = routes;