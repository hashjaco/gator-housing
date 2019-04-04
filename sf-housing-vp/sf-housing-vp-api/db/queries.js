const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'instagator',
  host: '35.230.96.183',
  database: 'instagator',
  password: 'Weareteam14',
  port: 5432,
});

/* Return all listings */
const getListings = (req, res) => {
  pool.query('SELECT * FROM listings ORDER BY listing_id ASC', (error, results) => {
    if (error){
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

/* Return listings by id */
const getListingById = (req, res) => {
  const id = parseInt(request.params.listing_id);

  pool.query('SELECT * FROM listings WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

const createListing = (req, res) => {
  const { id, type, price, image_path } = request.body;

  pool.query ('INSERT INTO listings (id, type, price, image_path) VALUES ($1, $2, $3, $4)', [id, type, price, image_path], (error, results) => {
    if (error){
      throw error;
    }
    response.status(201).send('Listing added with ID: ${result.insertId}');
  });
}

const updateListing = (request, response) => {
  const id = parseInt(request.params.listing_id);
  const { type, price, image_path } = request.body;

  pool.query(
    'UPDATE listings SET type = $1, price = $2 WHERE id = $3',
    [type, price, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Listing modified with ID: ${id}`);
    }
  );
}

const deleteListing = (request, response) => {
  const id = parseInt(request.params.listing_id);

  pool.query('DELETE FROM listings WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Listing deleted with ID: ${id}`);
  });
}

module.exports = {
  getListings,
  getListingById,
  createListing,
  updateListing,
  deleteListing,
}
