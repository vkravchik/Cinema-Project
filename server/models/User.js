const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, min: 8, required: true },
  isActivated: Boolean,
  isAdmin: Boolean,
  isBlocked: Boolean
}, {
  versionKey: false
});

module.exports = mongoose.model('users', UserSchema);
