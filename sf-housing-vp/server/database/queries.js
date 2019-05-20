const Pool = require("pg").Pool;
const pool = new Pool({
  user: "team14",
  host: "postgres-team14.cxfqlkmdb4ek.us-east-2.rds.amazonaws.com",
  database: "sfsu_housing",
  password: "Weareteam14",
  port: 5432
});

/* Listing QUERIES */

/* Return all Listings */
const getListings = (req, res) => {
  pool.query("SELECT * FROM listings WHERE approved='true' ORDER BY id ASC", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

/* Return Listings by id */
const getListingById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  pool.query(
    "SELECT * FROM listings WHERE id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
};

const createListing = (req, res) => {
  const {  title,listingType, price, description, address, zipcode, imageURL, noOfRoom} = req.body;
  pool.query(
    `INSERT INTO listings (title, description, address, zip_code, listing_type, price, no_of_rooms, image_path, user_id) VALUES
     ($1, $2, $3, $4, $5, $6, $7,$8, 9)`,
    [title, description, address, zipcode, listingType, price, noOfRoom, imageURL],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Listing added with ID: ${result.insertId}`);
    }
  );
};

const searchListings = (req, res) => {
  const searchText = req.params.key;
  const listingType = req.params.type;
  let search;
  if (searchText === "default") {
    search = "%%";
  } else {
    search = "%" + req.params.key + "%";
  }

  if (listingType !== "Any") {
    console.log("1st DB here", req.params.key, req.params.type);
    const searchArray = search.split(" ");
    searchArray.forEach(string => {
      pool.query(
        `SELECT * FROM listings
            WHERE address || ' ' || listing_type || ' ' || zip_code || ' ' || price  ILIKE  ($1)
            AND listing_type = ($2) AND approved='true'`,
        [search, listingType],
        (error, result) => {
          if (error) {
            throw error;
          }
          res.status(200).json(result.rows);
        }
      );
    });
  } else {
    console.log("2nd DB here", req.params.key, req.params.type);
    const searchArray = search.split(" ");
    searchArray.forEach(string => {
      pool.query(
        `SELECT * FROM listings
            WHERE address || ' ' || listing_type || ' ' || zip_code || ' ' || price  ILIKE  ($1) AND approved='true'`,
        [search],
        (error, results) => {
          if (error) {
            throw error;
          }
          res.status(200).json(results.rows);
        }
      );
    });
  }
};

const updateListing = (req, res) => {
  const id = parseInt(req.params.id);
  const { listing_type, price, image_path } = req.body;

  pool.query(
    "UPDATE listings SET listing_type = $1, price = $2 WHERE id = $3",
    [type, price, id],
    (error, res) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Listing modified with ID: ${id}`);
    }
  );
};

const deleteListing = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM listings WHERE id = $1", [id], (error) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Listing deleted with ID: ${id}`);
  });
};

/* USERS QUERIES */

/* Return all users */
const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

/* Return users by id */
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  pool.query(
    `INSERT INTO users (email_address, password, first_name, last_name, isadmin) VALUES ($1, crypt($2, gen_salt('bf')), $3, $4, $5)`,
    [email, password, first_name, last_name, "F"],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};

const searchUsers = (req, res) => {
  const search = "%" + req.params.key + "%";

  pool.query(
    `SELECT * FROM users
    WHERE address || ' ' || user_name || ' ' || phone_number || ' ' ||  ILIKE  ($1)`,
    [search],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { type, price, image_path } = req.body;

  pool.query(
    "UPDATE users SET type = $1, price = $2 WHERE id = $3",
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
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getListings,
  getListingById,
  createListing,
  searchListings,
  updateListing,
  deleteListing,
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
