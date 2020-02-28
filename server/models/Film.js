const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  name: String,
  description: String,
  posterUrl: String,
  genresId: [{
    type: mongoose.Schema.Types.ObjectID,
    ref: 'genres'
  }]
}, {
  versionKey: false,
  bufferCommands: true,
  autoCreate: true
});

module.exports = mongoose.model('films', filmSchema);
