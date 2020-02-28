const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const multer = require('multer');

require('dotenv').config();

// Configs
const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  }
});
const uploadImage = require('./helpers/helpers');

// Const
const app = express();

const serverPort = process.env.SERVER_PORT || 3001;
const dbUrl = process.env.DB_URL || '127.0.0.1';
const dbPort = process.env.DB_PORT || '27017';
const dbName = process.env.DB_NAME || 'cinema';

// App Use
app.disable('x-powered-by');
app.use(multerMid.single('file'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/ping', (req, res) => {
  res.send('pong');
});

app.post('/uploads', async (req, res, next) => {
  try {
    const myFile = req.file;
    const imageUrl = await uploadImage(myFile);
    console.log(imageUrl);
    res
      .status(200)
      .json({
        message: "Upload was successful",
        data: imageUrl
      })
  } catch (error) {
    next(error)
  }
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/films', require('./routes/filmRoutes'));
app.use('/api/genres', require('./routes/genreRoutes'));

mongoose.connect(`mongodb://${dbUrl}:${dbPort}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, (err) => {
  if(err) return console.log(err);

  app.listen(serverPort, function(){
    console.log("Сервер ожидает подключения...");
  });
});
