const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./src/middlewares/error-handler');
const app = express();

const routesController = require('./src/api/routes');
const { errors } = require('celebrate');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

const apiPath = '/api';
const apiVersion= '/v1';
const pathComplete = `${apiPath}${apiVersion}/`;
app.use(pathComplete, routesController);
app.use(errors());

app.get('/', (_req, res) => {
  res.redirect(pathComplete);
});

app.use(function(_req, res) {
  res.sendStatus(404);
});

/* Error handler middleware */
app.use(errorHandler);
module.exports = app;
