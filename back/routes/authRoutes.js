const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user')

passport.serializeUser(function (user, done) { // serialize: How we save the user
  done(null, user.id);
});

passport.deserializeUser(function (id, done) { // deserialize: How we look for the user
  User.findById(id)
    .then(user => done(null, user));
});


router.post('/login', passport.authenticate('local'), (req, res, next) => {
  console.log('LLEGANDO CORRECTAMENTE', req.body);
  done(null, user.id)
  res.send('LLEGANDO CORRECTAMENTE');
});

router.post('/register', (req, res) => {
  User.findOne({ where: { email: req.body.email, password: req.body.password } })
    .then((user) => {
      if (user) {
        console.log(user)
        res.sendStatus(400)
      } else {
        User.create({
          email: req.body.email,
          password: req.body.password
        })
          .then(user => {
            done(null, user)
            res.sendStatus(201)
          }
          )
      }
    })
})

router.get('/logout', (req, res) =>{
  req.logout()
  res.sendStatus(200)
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('llegaste')
})

module.exports = router