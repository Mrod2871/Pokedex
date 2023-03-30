const express = require('express');
const app = express();
const port = 3000
const pokemon = require('./models/pokemon.js');

// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { data: pokemon });
});

// SHOW
app.get('/:id', (req, res) => {
res.render('show.ejs', { data: pokemon[req.params.id] });
});
//New
app.get

//Edit
app.get('/pokemon/:id/edit', (req,res)=>{
})

//Create
app.post

//Update



//Destroy
app.delete


//App Listener
app.listen(port, ()=>{
    console.log("Running..");
})