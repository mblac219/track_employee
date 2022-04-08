const express = require( 'express' );
const mysql = require( 'mysql2' );
const path = require( 'path' );
const inquirer = require( 'inquirer' );
const cTable = require( 'console.table' );

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the company_db.`)
);

// Query database
db.query('SELECT * FROM department', function (err, results) {
  console.log(results);
});
db.query('SELECT * FROM role', function (err, results) {
  console.log(results);
});
db.query('SELECT * FROM employee', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
