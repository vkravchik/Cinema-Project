const router = require('express').Router();

const Film = require('../models/Film');

router.get('/', (req, res) => {
 Film.find({}, (err, doc) => {
   res.send(doc);
 }).populate('genresId');
});

router.post('/', (req, res) => {
  const  { name, description, genresId } = req.body;

  const newFilm = new Film({
    name,
    description,
    genresId
  });

  newFilm.save((err, doc) => {
    if (err) return err;

    res.send(doc);
  });
});

router.put('/', (req, res) => {
  const { id, name, description, genresId } = req.body;

  Film.findOneAndUpdate({_id: id}, {name, description, genresId}, {new: true}, (err, doc) => {
    if (err) return err;

    res.send(doc);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Film.findOneAndDelete({_id: id}, (err, doc) => {
    if (err) return err;

    res.send(doc);
  });
});

module.exports = router;
