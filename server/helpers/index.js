const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

const { cloudConfig } = require('../config/index');
const pathToPosterFolder = path.join(__dirname, `../assets/public/poster`);

cloudinary.config(cloudConfig);

const uploadImage = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file;

  fs.writeFileSync(path.join(pathToPosterFolder, `/${originalname}`), buffer);

  cloudinary.uploader.upload(path.join(pathToPosterFolder, `/${originalname}`), {
    folder: 'poster'
  }, (err, res) => {
    resolve(res);
  })
});

module.exports = {
  uploadImage
};
