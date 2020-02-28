const Cloud = require('@google-cloud/storage');
const path = require('path');
const serviceKey = path.join(__dirname, 'cinema-cloud-cfefe78eda3c.json');

const { Storage } = Cloud;
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'cinema-cloud'
});

module.exports = storage;
