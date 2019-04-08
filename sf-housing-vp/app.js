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

/* Routes */

app.get('/listings', db.getListings);
app.get('/listings/:id', db.getListingById);
app.post('/listings', db.createListing);
app.put('/listings/:id', db.updateListing);
app.delete('/listings/:id', db.deleteListing);

app.listen(PORT);

module.exports = app;
