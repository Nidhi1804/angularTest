const express = require('express');
const app = express();
const usersRoutes = express.Router();

// Require users model in our routes module
let Users = require('../models/users');

// Defined store route
usersRoutes.route('/add').post(function (req, res) {
  let users = new Users(req.body);
  users.save()
    .then(users => {
      res.status(200).json({'users': 'users in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
usersRoutes.route('/').get(function (req, res) {
  Users.find({},function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined edit route
usersRoutes.route('/find/:time').get(function (req, res) {
  let time = req.params.time;
  Users.find({time:time}, function (err, users){
      res.json(users);
  });
});

//  Defined update route
usersRoutes.route('/update/:time').post(function (req, res) {
  let time = req.params.time;
  Users.findOne({time:time}, function(err, users) {
    if (!users)
      return next(new Error('Could not load Document'));
    else {
      users.fName = req.body.fName;
      users.lName = req.body.lName;
      users.number = req.body.number;
      users.time = req.body.time;      users.save().then(users => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

module.exports = usersRoutes;
