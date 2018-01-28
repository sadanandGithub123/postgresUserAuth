const users = require('../models').UserTest;
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
const jwt_secret = "tokenSecretForUserAuthUsingPostgrs";
const saltRounds = 12;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  register(req, res) {
    return users
      .create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, saltRounds),
        telephone: req.body.telephone,
        
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  login(req, res){
    let hash = bcrypt.hashSync(req.body.password, saltRounds);
    return users
      .findOne({
        where: {
            email: req.body.email           
          }
      })
      .then(user => {
        if(bcrypt.compareSync(req.body.password, user.password)){
            const payload = {
                id: user.id 
            };

            var token = jwt.sign(payload, jwt_secret);
            res.set('token', 'kjhdkf89q37453lajjfq23');

            res.status(201).send({"id":user.id,"token":token});
        }else{
            res.status(400).send("Wrong User credentials");
        }
      })
      .catch(error => res.status(400).send(error));
  },    
};