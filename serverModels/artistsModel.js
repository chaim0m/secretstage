const mongoose = require('mongoose');


let artistSchema = new mongoose.Schema({
  name: String,
  cover: String,
  genre: String,
  eventType: [String],
  description: String,
  socialMedia: [String],
  linktosongs: String
});

let Artist = mongoose.model('artist', artistSchema);

module.exports = Artist;