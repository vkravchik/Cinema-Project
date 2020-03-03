const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  name: String,
  description: String,
  photoUrl: String,
  photoId: String,
  posterUrl: String,
  posterId: String,
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
