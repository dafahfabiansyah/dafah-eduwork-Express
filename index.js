const express = require('express');
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('/', (req, res) => {
  const htmlResponse = `
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello, world 🥳</h1>
        <a href="/about"><button>About Page</button></a>
        <a href="/product"><button>Product Page</button></a>
      </body>
    </html>`;
  res.send(htmlResponse);
});

app.get('/about', (req, res) => {
  const aboutHtml = `
    <html>
      <head>
        <title>About</title>
      </head>
      <body>
        <h1>About Page</h1>
        <a href="/"><button>Home Page</button></a>
        <a href="/product"><button>Product Page</button></a>
      </body>
    </html>`;
  res.send(aboutHtml);
});

app.get('/product', (req, res) => {
  const productHtml = `
    <html>
      <head>
        <title>Product</title>
      </head>
      <body>
        <h1>Product Page</h1>
        <a href="/"><button>Home Page</button></a>
        <a href="/about"><button>About Page</button></a>
      </body>
    </html>`;
  res.send(productHtml);
});

module.exports = app;
