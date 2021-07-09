const { Router } = require('express');
const routes = Router();

const UserController = require('./controllers/UserController');

routes.get('/users', UserController.index);

module.exports = routes;