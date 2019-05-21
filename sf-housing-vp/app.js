const db = require('./server/database/queries');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(fileUpload());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/assets/', express.static('./assets/'));

app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/assets/${req.body.filename}`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `assets/${req.body.filename}`});
  });

});

app.get('/properties', db.getListings);
app.get('/properties/:id', db.getListingById);
app.get('/searchproperties/:key/:type', db.searchListings);
app.post('/listings', db.createListing);
app.put('/properties/:id', db.updateListing);
app.delete('/properties/:id', db.deleteListing);
app.post('/users', db.addUser);
app.post('/messages', db.addMessages);
app.get('/messages/:id', db.getMessagesById);
app.post('/login', db.authenticateUser);


app.listen(PORT);

module.exports = app;
