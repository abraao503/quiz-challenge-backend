const Score = require('../models/score.model');
const User = require('../models/user.model');
const QuestionService = require('./question.service');
const calculateHitPercetage = require('../utils/calculateHitPercetage');

class ScoreService {
  async calculatePoints(answer, questionnaireId) {
    const questions = await QuestionService.getQuestions(questionnaireId);

    const hitPercetage = calculateHitPercetage(answer, questions);

    return parseInt(hitPercetage);
  }

  async createScore(points, userId) {
    const score = await Score.create({
      points,
      user_id: userId
    });

    return score;
  }

  async getScores(){
    const scores = await Score.findAll({
      order: [
        ['points', 'desc'],
        ['createdAt', 'asc']
      ],
      include: {
        model: User,
        as: 'user',
      }
    });

    return scores;
  }
}

module.exports = new ScoreService();