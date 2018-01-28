const usersController = require('../controllers').users

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the User Auth  API!',
  }));

  app.post('/api/register', usersController.register);
  app.post('/api/login', usersController.login);
};