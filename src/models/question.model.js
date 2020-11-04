const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Question extends Model {
  static init(sequelize){
    super.init(
      {
        content: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        is_correct: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      }, 
      {
        sequelize
      }
    );

    return this;
  }
}

module.exports = Question;