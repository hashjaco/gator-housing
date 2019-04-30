const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'team14',
    host: 'postgres-team14.cxfqlkmdb4ek.us-east-2.rds.amazonaws.com',
    database: 'sfsu_housing',
    password: 'Weareteam14',
    port: 5432,
});

/* PROPERTY QUERIES */

/* Return all properties */
const getProperties = (req, res) => {
    pool.query('SELECT * FROM properties ORDER BY id ASC', (error, results) => {
        if (error){
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

/* Return properties by id */
const getPropertyById = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    pool.query('SELECT * FROM properties WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const createProperty = (req, res) => {
    const { type, price, image_path } = req.body;

    pool.query ('INSERT INTO properties (property_type, price, image_path) VALUES ($1, $2, $3)', [type, price, image_path], (error, results) => {
        if (error){
            throw error;
        }
        res.status(201).send(`Property added with ID: ${result.insertId}`);
    });
};

const searchProperties = (req, res) => {
    const searchText = req.params.key;
    const propertyType = req.params.type;
    let search;
    if(searchText === "default"){
        search = '%%';
    }
    else{
        search = '%'+req.params.key+'%';
    }

    if(propertyType !== "Any"){
        console.log("1st DB here",req.params.key,req.params.type);
        const searchArray = search.split(" ");
        searchArray.forEach(string => {
        pool.query(`SELECT * FROM properties
        WHERE address || ' ' || property_type || ' ' || zip_code || ' ' || price  ILIKE  ($1)
        AND property_type = ($2)`,[search, propertyType], (error, results) => {
            if (error){
                throw error;
            }
            res.status(200).json(results.rows);
        });
        });
    }
    else{
        console.log("2nd DB here",req.params.key,req.params.type);
        const searchArray = search.split(" ");
        searchArray.forEach(string => {
        pool.query(`SELECT * FROM properties
        WHERE address || ' ' || property_type || ' ' || zip_code || ' ' || price  ILIKE  ($1)`,[search], (error, results) => {
            if (error){
                throw error;
            }
            res.status(200).json(results.rows);
        });
        });
    }   
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


/* USERS QUERIES */

/* Return all users */
const getAllUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error){
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

/* Return users by id */
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { type, price, image_path } = req.body;

    pool.query ('INSERT INTO users (User_type, price, image_path) VALUES ($1, $2, $3)', [type, price, image_path], (error, results) => {
        if (error){
            throw error;
        }
        res.status(201).send(`User added with ID: ${result.insertId}`);
    });
};

const searchUsers = (req, res) => {
    const search = '%'+req.params.key+'%';

    pool.query(`SELECT * FROM users
    WHERE address || ' ' || user_name || ' ' || phone_number || ' ' ||  ILIKE  ($1)`,[search], (error, results) => {
        if (error){
            throw error;
        }
        res.status(200).json(results.rows);
    });

}

const searchUsersByListings = (req, res) => {
	    const type = parseInt(req.params.User_type);

    pool.query('SELECT * FROM users WHERE User_type = $1', [t], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.users_id);
    const { type, price, image_path } = req.body;

    pool.query(
        'UPDATE users SET type = $1, price = $2 WHERE id = $3',
        [type, price, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`User modified with ID: ${id}`);
        }
    );
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.User_id);

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`User deleted with ID: ${id}`);
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
