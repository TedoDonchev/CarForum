const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET, COOKIE_NAME } = require('../config/config');

router.post('/register', async (req, res) => {

   
    const {username, password, passwordConfirm} = req.body;

    let existingUser = await User.findOne({ username });
    if(existingUser) {
        return res.status(200).json({message: 'User already exists!'});
    }

    if (password != passwordConfirm) {
        res.send(JSON.stringify({message: 'Passwords should match!'}))
    } else {
        let user = new User({username, password});
        user.save();
        
        const token = jwt.sign({_id: user._id, username: user.username}, SECRET);
        res.status(200).header('Authorization', 'Bearer '+ token).json({ user, token});
        //res.send(JSON.stringify(user));
    }

})

router.post('/login', async (req, res) => {

    const { username, password } = req.body;
    
    
    let user = await User.findOne({ username });
    if(!user) {
        res.send(JSON.stringify("User doesn't exist!"))
    }

    let areEqual = await bcrypt.compare(password, user.password);      
    if(!areEqual) {
        res.send(JSON.stringify("Wrong Password!"));
    } else {
        
        const token = jwt.sign({_id: user._id, username: user.username}, SECRET);

        res.status(200).header('Authorization', 'Bearer '+ token).json({ user, token});
    }

})


module.exports = router;
