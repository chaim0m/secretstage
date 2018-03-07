const mongoose = require('mongoose');
const {Schema} = mongoose;

let showSchema = new Schema({
  artist: {type: Schema.Types.ObjectId, ref: "artist"},
  title: String,
  price: Number,
  date: Date,
  location: String,
  time: String,
  description:  String,
  eventType: String,
  aboutHost: String,
  map: String,
  ticketQuantity: Number
});

let Show = mongoose.model('show', showSchema);

module.exports = Show;