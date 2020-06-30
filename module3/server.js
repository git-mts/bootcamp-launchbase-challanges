const express = require('express');
const nunjucks = require('nunjucks');
const courses = require('./data');

const server = express();
server.use(express.static(__dirname + '/public'));

server.set('view engine', 'njk');

nunjucks.configure(__dirname + '/views', {
  express: server,
  noCache: true,
  autoescape: false
});

server.get('/', (req, res) => {
  return res.render('index');
});

server.get('/about', (req, res) => {
  const data = {
    name: 'Rocketseat',
    image_url: 'https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg',
    title: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo',
    description: 'Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, construindo aplicações de alta performance e se destacando entre os maiores programadores.',
    technologies: [
      { name: 'NodeJS', url: 'https://nodejs.org/' },
      { name: 'ReactJS', url: 'https://pt-br.reactjs.org/' },
      { name: 'React Native', url: 'https://reactnative.dev/' }
    ]
  };

  return res.render('about', { data });
});

server.get('/contents', (req, res) => {
  return res.render('contents', { courses });
});

server.get('/course/:id', (req, res) => {

  const course = courses.find(item => item.id === req.params.id);

  if (!course)
    return res.render("not-found");

  return res.render('course', { course }) ;
});

server.use((req, res) => {
  return res.status(404).render("not-found");
});

server.listen(3001, () => {
  console.log('Server is Running - Challenge 3-1');
});