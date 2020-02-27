const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_SECRET;

const User = require('../models/User');

module.exports = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];

  if (token.startsWith('Bearer ')) {
    token = token.split(' ')[1];
  }

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        // Check if user exist in DB
        User.findOne({id: decoded.id, username: decoded.username}, (err, user) => {
          if (err) return err;

          if (!user) {
            return res.json({
              success: false,
              message: 'Token is not valid'
            });
          }

          next();
        });
      }
    });
  } else {
    return res.status(403).json({
      success: false,
      message: 'No token provided'
    });
  }
};
