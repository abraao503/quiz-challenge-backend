const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Question = require('../models/question.model');
const Questionnaire = require('../models/questionnaire.model');
const Score = require('../models/score.model');
const User = require('../models/user.model');

const models = [
  Question,
  Questionnaire,
  Score,
  User,
]

class Database{
  constructor(){
    this.init();
  }
 
  init(){
    this.connection = new Sequelize(databaseConfig.url, databaseConfig.options);
    
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();