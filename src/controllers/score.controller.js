const ScoreService = require('../services/score.service');

class ScoreController {
  async index(request, response) {
    try{
      const scores = await ScoreService.getScores();
      return response.status(200).json(scores);
    } catch(err){
      console.log(err);
      return response.status(500).json({error: 'Internal server error.'});
    }
  }
}

module.exports = new ScoreController();