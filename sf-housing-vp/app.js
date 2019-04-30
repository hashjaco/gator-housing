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



app.get('/properties', db.getProperties);
app.get('/properties/:id', db.getPropertyById);
app.get('/searchproperties/:key/:type', db.searchProperties);
app.post('/properties', db.createProperty);
app.put('/properties/:id', db.updateProperty);
app.delete('/properties/:id', db.deleteProperty);

app.listen(PORT);

module.exports = app;
