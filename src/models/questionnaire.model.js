const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Questionnaire extends Model {
  static init(sequelize){
    super.init(
      {
        name: Sequelize.STRING,
      }, 
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models){
    this.hasMany(models.Question, { foreignKey: 'questionnaire_id', as: 'questions'});
  }
}

module.exports = Questionnaire;