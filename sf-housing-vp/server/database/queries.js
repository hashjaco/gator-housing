const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'instagator',
    host: '35.230.96.183',
    database: 'instagator',
    password: 'Weareteam14',
    port: 5432,
});

/* Return all properties */
const getProperties = (req, res) => {
    pool.query('SELECT * FROM properties ORDER BY property_id ASC', (error, results) => {
        if (error){
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

/* Return properties by id */
const getPropertyById = (req, res) => {
    const id = parseInt(req.params.property_id);

    pool.query('SELECT * FROM properties WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const createProperty = (req, res) => {
    const { type, price, image_path } = req.body;

    pool.query ('INSERT INTO properties (type, price, image_path) VALUES ($1, $2, $3, $4)', [type, price, image_path], (error, results) => {
        if (error){
            throw error;
        }
        res.status(201).send(`Property added with ID: ${result.insertId}`);
    });
};

const searchProperties = (req, res) => {
    const search = req.body;

    pool.query(`SELECT to_tsvector(${search});`);
}

const updateProperty = (req, res) => {
    const id = parseInt(req.params.properties_id);
    const { type, price, image_path } = req.body;

    pool.query(
        'UPDATE properties SET type = $1, price = $2 WHERE id = $3',
        [type, price, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`Property modified with ID: ${id}`);
        }
    );
};

const deleteProperty = (req, res) => {
    const id = parseInt(req.params.property_id);

    pool.query('DELETE FROM properties WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Property deleted with ID: ${id}`);
    });
};

module.exports = {
    getProperties,
    getPropertyById,
    createProperty,
    searchProperties,
    updateProperty,
    deleteProperty
};
