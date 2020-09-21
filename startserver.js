var mysql = require('mysql');
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "palinkatrend"
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

function getDomain() {
  return result = dbQuery('SELECT * from datas;');
}

// * Important promise function
function dbQuery(databaseQuery) {
  return new Promise(data => {
    db.query(databaseQuery, function (error, result) { // change db->connection for your code
      if (error) {
        console.log(error);
        throw error;
      }
      try {
        console.log(result);

        data(result);

      } catch (error) {
        data({});
        throw error;
      }

    });
  });

}

//create a server object:
http.createServer(function (req, res) {
  var queryresult = null;
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  if (req.url === '/datas') {
    queryresult = getDomain();
  } else {
    if (req.url === '/times') {

    } else {

    }
  }
  if (queryresult != null) {
    res.end(queryresult[0]);
  } else {
    res.end('Query succeed.');
  }

}).listen(3000); //the server object listens on port 3000