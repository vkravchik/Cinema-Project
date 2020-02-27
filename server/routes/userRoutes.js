const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET;
const User = require('../models/User');

router.get('/', (req, res) => {
  User.find({}, (err, doc) => {
    if (err) return err;

    res.send(doc);
  })
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({username}, (err, user) => {
    if (err) return err;

    if (!user) {
      res.status(400).send({
        success: false,
        message: 'Entered bad login/password!'
      });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({
          id: user._id,
          username: user.username,
          isActivated: user.isActivated,
          isAdmin: user.isAdmin,
          isBlocked: user.isBlocked
        }, jwtKey);

        res.send({
          success: true,
          token
        });
      } else {
        res.status(400).send({
          success: false,
          message: 'Entered bad login/password!'
        });
      }
    }
  })
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  const user = {
    username,
    password: hashedPassword,
    isActivated: true,
    isAdmin: false,
    isBlocked: false,
  };

  User.findOne({username}, (err, existUser) => {
    if (err) return err;

    if (existUser) {
      res.status(409).send({
        success: false,
        message: 'User already exist!'
      });
    } else {
      const registeredUser = new User(user);

      registeredUser.save((err, savedUser) => {
        if (err) return err;

        res.send(savedUser);
      })
    }
  })
});

module.exports = router;
