const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        tittle: "Portafolio",
        name: "Jose Miguel"
    });
  })

 router.get('/Computo1.hbs', (req, res) => {
    res.render('/Computo1', {tittle: 'Computo1'});
});

 module.exports = router;

