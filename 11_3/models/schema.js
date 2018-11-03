const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  sender: {
    type: String,
    required: "Please enter your name"
  },
  mesage: {
    type: String,
    required: "Please include a mesage"
  }
});

var Mesage = mongoose.model('Mesage', ChatSchema);
module.exports = Mesage;
