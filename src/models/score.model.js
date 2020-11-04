const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Score extends Model {
  static init(sequelize){
    super.init(
      {
        points: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        }
      }, 
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
  }
}

module.exports = Score;