
//⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔
//🟢🟢 REQUIREMENT PACKAGES 🟢🟢
const express = require('express'); // Qatariat API Server will use express for it's server.

const app = express(); //App Declaration
app.use(express.json());
var fs = require('fs'); //File System for Node JS will help us till Databases arri
const fetch = require('node-fetch')

let options = {
    method: 'GET',
    mode: 'no-cors'
  };

const songs = require('./src/data.json'); //Our Database


var http = require('http');
var com = http.createServer(function(req, resp){
  // Print the name of the file for which request is made.
  console.log("Request for demo file received.");
  fs.readFile("./index.html",function(error, data){
    if (error) {
      resp.writeHead(404);
      resp.write('Contents you are looking for not found');
      resp.end();
    }  else {
      resp.writeHead(200, {
        'Content-Type': 'text/html'
      });
      resp.write(data.toString());
      resp.end();
    }
  });
});

setInterval(function() {
    const data = fetch(`https://via.inex.ga/api/songs/top`, options)
    .then(function(response) { return response.json(); })
    .then(function(json) {
        fs.writeFileSync('src/data.json', JSON.stringify(json));
            });
  }, 30000);