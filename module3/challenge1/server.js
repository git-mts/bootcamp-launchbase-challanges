const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
server.use(express.static(__dirname + '/public'));

server.set('view engine', 'njk');

nunjucks.configure(__dirname + '/views', {
  express: server,
  noCache: true
});

server.get('/', (req, res) => {
  return res.render('index');
});

server.get('/about', (req, res) => {
  return res.render('about');
});

server.get('/contents', (req, res) => {
  return res.render('contents');
});

server.use((req, res) => {
  return res.status(404).render("not-found");
});

server.listen(3001, () => {
  console.log('Server is Running - Challenge 3-1');
});