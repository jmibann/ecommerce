const S = require('sequelize');

const db = require('../configure/db');
<<<<<<< HEAD
const Books = require('./book')
;
const Shopcart = db.define('shopcart', {
  quantity: {
    type: S.STRING,
    alloNull: false
  }
});

Shopcart.belongsToMany(Books, { through: 'shopBooks' });

=======
const Book = require('./book');

const Shopcart = db.define('shopcart', {
  quantity: {
    type: S.STRING,
    alloNull: false,
  },
});

Shopcart.belongsToMany(Book, { through: 'shopBooks' });

>>>>>>> 636357ccd04050f22812c8f8d69b2266038410a5
module.exports = Shopcart;
