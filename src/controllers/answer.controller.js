const ScoreService = require('../services/score.service');

class AnswerController {
  async store(request, response) {
    const { questions: answer, userId } = request.body;
    const { questionnaireId } = request.params;

    try {
      const points = await ScoreService.calculatePoints(answer, questionnaireId);
      const userScore = await ScoreService.createScore(points, userId);
      
      return response.json(userScore);
    } catch(err) {
      return response.status(500).json({error: 'Internal server error.'});
    }

  }
}

module.exports = new AnswerController();