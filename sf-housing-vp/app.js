const db = require('./server/database/queries');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/assets/', express.static('./assets/'));



app.get('/properties', db.getListings);
app.get('/properties/:id', db.getListingById);
app.get('/searchproperties/:key/:type', db.searchListings);
app.post('/properties', db.createListing);
app.put('/properties/:id', db.updateListing);
app.delete('/properties/:id', db.deleteListing);
app.post('/users', db.addUser);

app.listen(PORT);

module.exports = app;
