const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,       
    },
    password: {
        type: String,
        required: true,      
    },
    imageUrl: {
        type: String,
        default: 'https://i.stack.imgur.com/34AD2.jpg',
    },
    articles: []
});

userSchema.pre('save', function (next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        });
})


module.exports = mongoose.model('User', userSchema);