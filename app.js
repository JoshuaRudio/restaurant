const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const port = process.env.port || 8000;

app.listen(port);

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/menu', (req, res) => {
  res.render('pages/menu');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});
