const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

const { cloudConfig } = require('../config/index');

cloudinary.config(cloudConfig);

const uploadPhoto = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file;
  const pathToFolder = path.join(__dirname, `../assets/public/photo`);


  fs.writeFileSync(path.join(pathToFolder, `/${originalname}`), buffer);

  cloudinary.uploader.upload(path.join(pathToFolder, `/${originalname}`), {
    folder: 'poster',
    width: 185,
    height: 278,
    crop: "scale"
  }, (err, res) => {
    if (err) reject(err);

    fs.unlinkSync(path.join(pathToFolder, `/${originalname}`));
    resolve(res);
  })
});

const uploadPoster = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file;
  const pathToFolder = path.join(__dirname, `../assets/public/poster`);


  fs.writeFileSync(path.join(pathToFolder, `/${originalname}`), buffer);

  cloudinary.uploader.upload(path.join(pathToFolder, `/${originalname}`), {
    folder: 'poster',
  }, (err, res) => {
    if (err) reject(err);

    fs.unlinkSync(path.join(pathToFolder, `/${originalname}`));
    resolve(res);
  })
});

const destroyImage = (posterId) => new Promise((resolve, reject) => {
  cloudinary.uploader.destroy(posterId, (err, res) => {
    if (err) reject(err);

    resolve(res);
  })
});

module.exports = {
  uploadPhoto,
  uploadPoster,
  destroyImage
};
