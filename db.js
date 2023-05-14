const {createPool} = require('mysql');

// create a connection to the database
const connection = createPool({
  host: 'baep0qafeswkoomgbqcl-mysql.services.clever-cloud.com',     // hostname
  user: 'un2vwg6y6d196owm',  // database username
  password: 'nLFJ6dJx4tYbezUqZbEA',  // database password
  database: 'baep0qafeswkoomgbqcl'   // database name
});


module.exports = connection;