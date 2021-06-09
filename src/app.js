const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render('index', {
      tittle: "Portafolio",
      name: "Jose Miguel"
  });
})

app.get('/Computo1.hbs', function (req, res) {
  res.render('Computo1', {
      tittle: "Portafolio",
      name: "Jose Miguel"
  });
})

app.get('/Computo2.hbs', function (req, res) {
  res.render('Computo2', {
      tittle: "Portafolio",
      name: "Jose Miguel"
  });
})

app.get('/Computo3.hbs', function (req, res) {
  res.render('Computo3', {
      tittle: "Portafolio",
      name: "Jose Miguel"
  });
})

app.get('/Conclusion.hbs', function (req, res) {
  res.render('Conclusion', {
      tittle: "Portafolio",
      name: "Jose Miguel"
  });
})
 
app.listen(3000, () =>{
    console.log("El servidor esta corriendo en el puerto 3000");
})