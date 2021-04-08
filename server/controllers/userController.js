const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET, COOKIE_NAME } = require('../config/config');

router.post('/register', async (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    let passwordConfirm = req.body.passwordConfirm;

    if (password != passwordConfirm) {
        res.send(JSON.stringify({errorMsg: 'Passwords should match!'}))
    } else {
        let user = new User({username, password});
        user.save();

        res.send(JSON.stringify(user));
    }

})

router.post('/login', async (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    //res.cookie('suraikata', '5436');
    
    let user = await User.findOne({username});
    if(!user) {
        res.send(JSON.stringify("User doesn't exist!"))
    }

    let areEqual = await bcrypt.compare(password, user.password);      
    if(!areEqual) {
        res.send(JSON.stringify("Wrong Password!"));
    } else {
        
        let token = jwt.sign({_id: user._id, username: user.username}, SECRET);
        res.cookie(COOKIE_NAME , token, {httpOnly: true, secure: false}).json({user});
        //console.log(res.cookie(COOKIE_NAME , token, {httpOnly: true}));
        
        //res.cookie('suraikata', '5436');

    }

   
    
})


module.exports = router;
