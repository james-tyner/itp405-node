// WebSockets assignment
let WebSocket = require('ws');

// create WebSocket server
let wss = new WebSocket.Server({
  port:process.env.PORT || 8080
});

wss.on("connection", function(ws){ // this is for one connection instance
  ws.on("message", function(message){
    // wss.clients is the list of all connected clients on one server
    wss.clients.forEach((client) => {
      client.send(message);
    });
  });
});

/* PREVIOUS ASSIGNMENT

const sqlite3 = require('sqlite3').verbose();

let express = require("express");
let app = express();


app.get('/api/artists', function(request, response){
  let db = new sqlite3.Database('chinook.db', (err) => {
    if (err) {
      return console.error(err.message);
    }

    let sql = `SELECT * FROM artists`;

    if (request.query.filter) {
      sql += ` WHERE NAME LIKE '%${request.query.filter}%'`;
    }

    var artistsList = []

    db.all(sql,[],(err, rows ) => {
      if (err) {
        throw err;
      }

      rows.forEach((row)=>{
        artistsList.push(row);
      });

      response.json(artistsList);
    });
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
  });
});

app.listen(process.env.PORT || 8000); */
