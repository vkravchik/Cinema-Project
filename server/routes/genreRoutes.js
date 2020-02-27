const router = require('express').Router();

const Genre = require('../models/Genre');

router.get('/', (req, res) => {
  Genre.find({}, (err, doc) => {
    if (err) return err;

    res.send(doc);
  })
});

router.post('/', (req, res) => {
  const  { name } = req.body;

  const newGenre = new Genre({name});

  newGenre.save((err, doc) => {
    if (err) return err;

    res.send(doc);
  });
});

router.put('/', (req, res) => {
  const { id, name } = req.body;

  Genre.findOneAndUpdate({_id: id}, {name}, {new: true}, (err, doc) => {
    if (err) return err;

    res.send(doc);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Genre.findOneAndDelete({_id: id}, (err, doc) => {
    if (err) return err;

    res.send(doc);
  });
});

module.exports = router;
