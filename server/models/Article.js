const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    carBrand: {
        type: String,
    },
    authorName: {
        type: String,
    },
    authorId: {
        //type: String,
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: []

});

module.exports = mongoose.model('Article', articleSchema);