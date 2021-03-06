const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');
 
app.get('/Computo1.hbs', function (req, res) {
  res.render('Computo1', {
      tittle: "Computo1",
      name: "Jose Miguel"
  });
})
 
app.listen(3000, () =>{
    console.log("El servidor esta corriendo en el puerto 3000");
})