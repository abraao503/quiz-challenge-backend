const Score = require('../models/score.model');
const User = require('../models/user.model');
const QuestionService = require('./question.service');
const calculateHitPercentage = require('../utils/calculateHitPercentage');

class ScoreService {
  async calculatePoints(answer, questionnaireId) {
    const questions = await QuestionService.getQuestions(questionnaireId);

    const hitPercentage = calculateHitPercentage(answer, questions);

    return parseInt(hitPercentage);
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