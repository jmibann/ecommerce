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
  const authenticated = req.isAuthenticated();
  if (authenticated) {
    res.send({
      id: req.user.id,
      email: req.user.email,
    })
  }
}
)


router.post('/register', (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user) {
        console.log(user)
        res.send('no')
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

router.get('/logout', (req, res) => {
  req.logout()
  res.sendStatus(200)
})

router.get('/google', passport.authenticate('google', {
  scope: ['email'],
  accessType: 'offline',
  prompt: 'consent',
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  const authenticated = req.isAuthenticated();
  if (authenticated) {
    res.cookie('user', {
      id: req.user.id,
      email: req.user.email,
    }, maxAge= 24*60*60*1000)
    res.send({
      id: req.user.id,
      email: req.user.email,
    }).redirect('/')
  }
})

module.exports = router