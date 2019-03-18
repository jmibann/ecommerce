const express = require('express');
const app = express();
const bodyParser = require("body-parser");

var morgan = require('morgan');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
//Local imports
const db = require('./configure/db');
const authRoutes = require('./routes/authRoutes');
const passportSetup = require('./configure/passport-setup')
const Book = require('./models/book')
const Category = require('./models/category')
const User = require('./models/user')

app.use(morgan('tiny'));    // loggin middleware
app.use(bodyParser.urlencoded({ extended: true })); // HTML submits
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({ secret: 'titans' })); // Cookie session middleware

app.use(express.static(__dirname + '/public'));


app.use(passport.initialize()); // passport configuration & session connection
app.use(passport.session());



app.use('/auth', authRoutes)


app.get('/*', (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html')
});

db.sync({ force: false }).then((con) => {
<<<<<<< HEAD
    console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`)
=======
>>>>>>> f279df1b0fa36d4f3a8b4661f79117e37f037f8a
    app.listen(3000, () => console.log('SERVER LISTENING AT PORT 3000'))
})

