const S= require('sequelize');
const crypto= require('crypto');

const db= require('../configure/db');
const Comments = require('./comments');
const Shopcart = require('./shopcart');
const Purchase = require('./purchase');

const User= db.define('users', {
    userName:{
        type: S.STRING,
        allowNull: false, 
    },
    password:{
        type: S.STRING,
        allowNull: false,
    },
    salt:{
        type: S.STRING,
    },
    email:{
        type: S.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    address: {
        type: S.TEXT,
    },
    isAdmin:{
        type: S.BOOLEAN,
    },
    shopCartId:{
        type: S.INTEGER,
    }
})

User.addHook('beforeCreate', (user) =>{
    user.salt = crypto.randomBytes(20).toString('hex');
    user.password= user.hashPassword(user.password)
})

User.prototype.hashPassword= function(password){
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}

User.prototype.verifyPassword= function(password){
    return this.password=== this.hashPassword(password);
}


User.hasMany(Comments, {foreignKey: 'id'})
User.hasMany(Purchase, {foreignKey: 'id'})
User.hasOne(Shopcart, {foreignKey: 'id'})

module.exports= User;