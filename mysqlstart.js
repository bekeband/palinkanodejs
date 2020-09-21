var mysql = require('mysql');
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "palinkatrend"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");  
});

var sql = 'select * from datas';

if (0)
{
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });    
}

//create a server object:
http.createServer(function (req, res) {

/*  console.log(req.headers); //  Data request header information
  console.log(req.httpVersion); //  http protocol version used
  console.log(req.url); //  Request address, the address is the address of the domain name back (route)
  console.log(req.method); //  Request method


//  console.log(querystring.parse(req.url));

  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);*/
  res.writeHead(200, {'Content-Type': 'text/html'});

  if (req.url == '/datas') {
    con.query(sql, function (err, results, fields) {
      if (err) throw err;
      var rows = JSON.parse(JSON.stringify(results[0]));

      // here you can access rows
      console.log(rows);

      res.end();
    });  
  } else {
//    res.end('NO RESULT');
  }


  }).listen(3000); //the server object listens on port 3000