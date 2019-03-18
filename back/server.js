const express= require('express');
const bodyParser = require("body-parser");
var morgan= require('morgan');
var ejs = require("ejs")
var fs   = require('fs');
var str = fs.readFileSync(__dirname + '/public/mailBody.ejs', 'utf8')

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

//Email Generator
app.post('/send-email', function (req, res) {   //Form Data Handling 
    var template = ejs.render(str, {nombre : req.body.body, item1:"Atlas Shruggled",item2:"Harry Potter",item3:req.body.body});

    //Connects to the channel trough which the mail will be sent.
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'titans.bookstore.noreply@gmail.com',
            pass: 'ramirojuan5'
        }
    });

    //The email data will be taken from the body sent from the front and parsed.
    let mailOptions = {
        from: '"Bookstore" <xx@titans.com>', // sender address (what the receiver sees)
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        html: template,
    };
    

    //Final Status Report
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.render('index');
        });
    });

db.sync({ force: false }).then((con) => {
    console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`)
    app.listen(3000, () => console.log('SERVER LISTENING AT PORT 3000'))
  })

