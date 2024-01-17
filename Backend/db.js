const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017");

const CardSchema = mongoose.Schema({
  Name: String,
  Description: String,
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
