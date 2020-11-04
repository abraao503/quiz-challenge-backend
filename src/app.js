const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('./database');

class App{
  constructor(){
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware(){
    this.server.use(cors());
    this.server.use(express.json());

    this.server.use((err, req, res, next) => {
      if(err.status === 400)
        return res.status(err.status).json({ error: 'Invalid JSON format.' });
      return next(err);
    });
  }

  routes(){
    this.server.use('/', routes);
  }
}

module.exports = new App().server;