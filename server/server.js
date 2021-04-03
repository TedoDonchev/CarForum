const config = require('./config/config');

const express = require('express');
const app = express();

require('./config/mongoose');

const Article = require('./models/Article');
let title = "Gosho";
let text = "aSdsad";
let author = "kiro";
let article = new Article({title, text, author});
article.save();
console.log(article);

const User = require('./models/User');
let username = "pesho";
let password = "zedyasuo";
let user = new User({username, password});
user.save();
console.log(user);



app.listen(config.PORT, () => {console.log(`Server is running on port ${config.PORT}...`)});
