const db = require('./database/queries');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/listings', db.getListings);
app.get('/listings/:id', db.getListingById);
app.post('/listings', db.createListing);
app.put('/listings/:id', db.updateListing);
app.delete('/listings/:id', db.deleteListing);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});

module.exports = app;