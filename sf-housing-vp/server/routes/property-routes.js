const app = require(/sfsu-housing-vp/app.js);

app.get('/properties', db.getProperties);
app.get('/properties/:id', db.getPropertyById);
app.get('/searchproperties/:key', db.searchProperties);
app.post('/properties', db.createProperty);
app.put('/properties/:id', db.updateProperty);
app.delete('/properties/:id', db.deleteProperty);


module.exports = app;
