const redis = require('redis');
const express = require('express');
const getList = require('./getList');
const fillRedis = require('./fillRedis');
const search = require('./search');

const client = redis.createClient();
const app = express();

client.on('error', (err) => {
  console.log(`Error ${err}`);
});

app.post('/save', async (req, res) => {
  const list = await getList();
  fillRedis(client, list);
  res.send('Objetos agregados correctamente');
});

app.get('/search', async (req, res) => {
  const ship = req.query.name;
  const replay = await search(client, ship);
  // console.log('reply', replay);

  if (replay === 404) {
    res.status(404);
  }
  res.json(replay);
});

app.listen(3000);
