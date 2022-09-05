const express = require('express');
const calculadoraRouter = require('./calculadora.routes');

function routerApiCalculadora(app){

  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/calculadora', calculadoraRouter);

}

module.exports = routerApiCalculadora;
