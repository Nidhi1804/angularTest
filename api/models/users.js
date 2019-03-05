// users.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for users
let users = new Schema({
  fName: {
    type: String
  },
  lName: {
    type: String
  },
  number: {
    type: Number
  },
  timeId: {
    type: Number
  }
},{
    collection: 'Users'
});

module.exports = mongoose.model('users', users);
