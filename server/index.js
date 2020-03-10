const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

require('dotenv').config();

// Configs
const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

// Const
const app = express();

const serverPort = process.env.PORT || 3001;
const dbUrl = process.env.DB_URL || '127.0.0.1';
const dbPort = process.env.DB_PORT || '27017';
const dbName = process.env.DB_NAME || 'cinema';

// App Use
app.use(cors());
app.use(express.json());
app.use(multerMid.fields([{
  name: 'photoFile'
}, {
  name: 'posterFile'
}]));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist/AngularTesting')));


app.get('/api/ping', (req, res) => {
  res.send('pong');
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/films', require('./routes/filmRoutes'));
app.use('/api/genres', require('./routes/genreRoutes'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/AngularTesting', 'index.html'));
});

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
