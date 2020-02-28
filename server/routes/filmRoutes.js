const router = require('express').Router();

const Film = require('../models/Film');
const { uploadImage } = require('../helpers');

router.get('/', (req, res) => {
 Film.find({}, (err, doc) => {
   res.send(doc);
 }).populate('genresId');
});

router.post('/', async (req, res, next) => {
  try {
    const { name, description, genresId } = req.body;
    const { file } = req;

    const poster = await uploadImage(file);

    if (poster) {
      const newFilm = new Film({
        name,
        description,
        posterUrl: poster.secure_url,
        genresId
      });

      newFilm.save((err, doc) => {
        if (err) return err;

        res.send(doc);
      });
    }
  } catch (error) {
    next(error)
  }
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
