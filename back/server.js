const express= require('express');
const bodyParser = require("body-parser");
var morgan= require('morgan');

//Local imports
const db = require('./configure/db');
const Book = require('./models/book')
const Category= require('./models/category')
app= express();

app.use(morgan('tiny'));    // loggin middleware
app.use(bodyParser.urlencoded({extended: true})); // HTML submits
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/pepe', (req,res,next) => {
    Book.create({
        name: "LEo Carrocio y sus amantes",
        author: "JAvi LAnger",
        year: 1998,
        editorial: "Arturo PRod",
        description:"Ramiro clavo un clavito, que clavito clavo ramiro",
        sold: 450,
        price: 16.60,
        stock: 15,
    },
    {
        include: [Category]
    })
    .then(book => {
        book.setCategories([1,2])
        res.send('ok')
    })
})

app.get('/cat', (req, res) => {
    Category.bulkCreate([
        {category: "erotico"},
        {category:"terror"},
        {category:"autoyuda"}
    ])
    .then(() => res.send('ok'))
})

app.get('/find', (req, res) => {
    res.send('ok')
})

app.get('/*', (req,res,next) => {
    res.sendFile(__dirname + '/public/index.html');
})

db.sync({ force: true }).then((con) => {
    console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`)
    app.listen(3000, () => console.log('SERVER LISTENING AT PORT 3000'))
  })