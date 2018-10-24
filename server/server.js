const axios = require('axios');
const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));
app.get('/api/:title', (req,res) => {
    console.log(req.params.title);
    const movie = req.params.title;
    axios
    .get(`http://www.omdbapi.com/?s=${movie}&apikey=8730e0e`)    
    .then(r => res.send(r.data))
    .catch(err => res.status(500).send('bad response'));
})

app.get('/api/movie/:id', (req,res) => {
    console.log(req.params.id);
    axios
        .get(`http://www.omdbapi.com/?i=${req.params.id}&apikey=8730e0e`)
        .then(r => res.send(r.data))
        .catch(err => res.status(500).send('bad response'));;
});

module.exports = app;
