const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'palinkatrend'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});