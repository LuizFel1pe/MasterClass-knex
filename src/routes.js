const { Router } = require('express');
const routes = Router();

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

routes
  // Routes Users
  .get('/users', UserController.index)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)
  //Routes Projects
  .get('/projects', ProjectController.index)

module.exports = routes;