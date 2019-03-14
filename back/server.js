const express= require('express');
const bodyParser = require("body-parser");
var morgan= require('morgan');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20')

//Local imports
const db = require('./configure/db');
const Book = require('./models/book')
const Category= require('./models/category')
app= express();

app.use(morgan('tiny'));    // loggin middleware
app.use(bodyParser.urlencoded({extended: true})); // HTML submits
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        ClientID: '166580733119-fi5aod04fpu0qp9vtm8pdi1s99so6qqn.apps.googleusercontent.com',
        clientSecret :'binbUJ0LnnAuvVRD5NT5ndPe'
    }, () => {
        
    }
)


app.get('/*', (req,res,next) => {
    res.sendFile(__dirname + '/public/index.html');
})

db.sync({ force: true }).then((con) => {
    console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`)
    app.listen(3000, () => console.log('SERVER LISTENING AT PORT 3000'))
  })