const express = require('express');
const app = express();
const fetch = require('node-fetch');
let options = {
    method: 'GET',
  };


app.get('/', (req, res) => {
    res.send('Welcome to CORS server')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})

app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })

app.get('/top', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const data = fetch(`https://via.inex.ga/api/songs/top`, options)
    .then(function(response) { return response.json(); })
    .then(function(jsondata) {
       // fs.writeFileSync('src/data.json', JSON.stringify(json));
       res.send(jsondata)
        });
    });