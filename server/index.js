const express = require('express')
const bodyParser = require('body-parser');
const pokemonData = require('../data/pokemon.json');


const app = express()
app.use(bodyParser.json())
const port = 8080

// CORS
app.use(function(req, res, next) {
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE')
        if (req.method === 'OPTIONS') return res.send(200)
    }
    next()
})

app.get('/pokemon/:id', (req, res) => {
    const { id } = req.params;
    console.log('id', id);
    const pokemon = pokemonData[id - 1];
    res.json({
        pokemon
    });
});

app.get('/pokemon', (req, res) => {
  const limit = 20;
  const { page = 0 } = req.query;

  const start = page * limit;
  const end = start + limit;

  const data = pokemonData.slice(start, end);
  res.json({
      pokemon: data
  });
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})