const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    author: {
        type: String,
        // type: mongoose.Types.ObjectId,
        // ref: 'User',
    }

});

module.exports = mongoose.model('Article', articleSchema);