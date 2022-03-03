

const express = require('express');
const routerMains = express.Router();

const defaultController = require('./default.controller');
const primeController = require('./prime.controller');

routerMains.use('/', defaultController);
routerMains.use('/prime', primeController);

module.exports = routerMains;
