const express = require('express');
<<<<<<< HEAD
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs'); // eslint-disable-line
const fs = require('fs');
const str = fs.readFileSync(path.join(__dirname, '/public/mailBody.ejs'), 'utf8');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const nodeMailer = require('nodemailer');

// Local imports
const db = require('./configure/db');
const User = require('./models/user');
const Book = require('./models/book');
const Category = require('./models/category');

const app = express();

app.use(morgan('tiny')); // loggin middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); // HTML submits
app.use(bodyParser.json());
app.use(session({ secret: 'bootcamp' })); // Cookie session middleware

app.use(passport.initialize()); // passport configuration & session connection
app.use(session());

passport.serializeUser(function (user, done) { // serialize: How we save the user
  done(null, user.id);
});

passport.deserializeUser(function (id, done) { // deserialize: How we look for the user
  User.findById(id)
    .then(user => done(null, user));
});

passport.use(new LocalStrategy({ usernameField: 'email' },
  function (email, password, done) {
    User.findAll({ where: { email } })
      .then(
        function (user) {
          console.log(user);
          if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
          if (!user.verifyPassword(password)) { return done(null, false, { message: 'Incorrect password' }); }
          return done(null, user);
        })
      .catch(done);
  }
));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/pepe', (req, res, next) => {
  Book.create({
    name: 'LEo Carrocio y sus amantes',
    author: 'JAvi LAnger',
    year: 1998,
    editorial: 'Arturo PRod',
    description: 'Ramiro clavo un clavito, que clavito clavo ramiro',
    sold: 450,
    price: 16.60,
    stock: 15
  },
  {
    include: [Category]
  })
    .then(book => {
      book.setCategories([1, 2]);
      res.send('ok');
    });
});

app.get('/cat', (req, res) => {
  Category.bulkCreate([
    { category: 'erotico' },
    { category: 'terror' },
    { category: 'autoyuda' }
  ])
    .then(() => res.send('ok'));
});

app.get('/find', (req, res) => {
  res.send('ok');
});

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Email Generator
app.post('/send-email', function (req, res) { // Form Data Handling
  var template = ejs.render(str, { nombre: req.body.body, item1: 'Atlas Shruggled', item2: 'Harry Potter', item3: req.body.body });

  // Connects to the channel trough which the mail will be sent.
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'titans.bookstore.noreply@gmail.com',
      pass: 'ramirojuan5'
    }
  });

  // The email data will be taken from the body sent from the front and parsed.
  let mailOptions = {
    from: '"Bookstore" <xx@titans.com>', // sender address (what the receiver sees)
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    html: template
  };

  // Final Status Report
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.render('index');
  });
});

db.sync({ force: true }).then((con) => {
  console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`);
=======

const app = express();
const bodyParser = require('body-parser');

const morgan = require('morgan');

const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// Local imports
const db = require('./configure/db');
const authRoutes = require('./routes/authRoutes');

require('./configure/passport-setup');


app.use(morgan('tiny')); // loggin middleware
app.use(bodyParser.urlencoded({ extended: true })); // HTML submits
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'titans' })); // Cookie session middleware

app.use(express.static(`${__dirname}/public`));


app.use(passport.initialize()); // passport configuration & session connection
app.use(passport.session());


app.use('/auth', authRoutes);


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

db.sync({ force: false }).then(() => {
>>>>>>> 636357ccd04050f22812c8f8d69b2266038410a5
  app.listen(3000, () => console.log('SERVER LISTENING AT PORT 3000'));
});
