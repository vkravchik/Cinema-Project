const router = require('express').Router();

const Film = require('../models/Film');
const { uploadPhoto, uploadPoster, destroyImage } = require('../helpers');

router.get('/', (req, res) => {
 Film.find({}, (err, doc) => {
   res.send(doc);
 }).populate('genresId');
});

router.post('/', async (req, res, next) => {
  try {
    const { name, description, genresId } = req.body;
    const { photoFile, posterFile } = req.files;

    const photo = await uploadPhoto(photoFile[0]);
    const poster = await uploadPoster(posterFile[0]);

    if (photo && poster) {
      const newFilm = new Film({
        name,
        description,
        photoUrl: photo.secure_url,
        photoId: photo.public_id,
        posterUrl: poster.secure_url,
        posterId: poster.public_id,
        genresId
      });

      newFilm.save((err, doc) => {
        if (err) return err;

        res.send(doc);
      });
    }
  } catch (error) {
    console.log(error);
    next(error)
  }
});

router.put('/', async (req, res, next) => {
  const { id, name, description, genresId } = req.body;
  const { file } = req;

  const poster = await uploadImage(file);

  if (poster) {
    Film.findOneAndUpdate({_id: id}, {name, description, genresId, posterUrl: poster.secure_url,}, {new: true}, (err, doc) => {
      if (err) return err;

      res.send(doc);
    });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Film.findOneAndDelete({_id: id}, (err, doc) => {
    if (err) return err;

    destroyImage(doc.posterId);

    res.send(doc);
  });
});

module.exports = router;
