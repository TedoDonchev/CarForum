const express = require('express');
const cookieParser = require('cookie-parser');


module.exports = function (app) {
    
    app.use(express.urlencoded({
        extended: true,
    }))

    app.use(cookieParser());
}