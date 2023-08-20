const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get('/', (req, res) => {
  res.send('hello world🥳');
});

app.get('/about', (req, res) => {
  res.send('about page ');
});

module.exports = app;
