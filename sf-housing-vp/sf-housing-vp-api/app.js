const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/queries');
const app = express();
const PORT = '8080';

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function(req, res){
    res.send("You have reached the home page!");
});

app.get("/:page", function(req, res){
    var page = req.params.page;
    res.render(page);
});

app.get('/listings', db.getListings);
app.get('/listings/:id', db.getListingById);
app.post('/listings', db.createListing);
app.put('/listings/:id', db.updateListing);
app.delete('/listings/:id', db.deleteListing);

app.listen(PORT, function() {
    console.log('App listening on port ' + PORT);
});
