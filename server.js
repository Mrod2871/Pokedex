//Dependencies
const express = require('express');
const methodOverride = require('method-override')
const app = express();
const port = 3000
const pokemon = require('./models/pokemon.js');


//
app.use('/public', express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// Index
app.get('/', (req, res) => {
    res.render('index.ejs', { data: pokemon });
});

//New
app.get('/new', (req, res) => {
    res.render('new.ejs')
})

//Destroy
app.delete('/:id', (req, res)=> {
    pokemon.splice(req.params.id, 1)
    res.redirect('/')
})

//Update
app.put('/:id', (req, res) => {
    pokemon[req.params.id] = req.body
    res.redirect(`/`)
})

//Create
app.post('/', (req, res)=> {
    pokemon.push(req.body)
    res.redirect('/')
})

//Edit
app.get('/:id/edit', (req,res)=> {
    res.render('edit.ejs', 
    {
        data: pokemon[req.params.id] 
    })
})

// SHOW
app.get('/:id', (req, res) => {
res.render('show.ejs', 
    { 
        data: pokemon[req.params.id] 
    });
});

//App Listener
app.listen(port, () => {
    console.log(`Running on ${port}`);
})