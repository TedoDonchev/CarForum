const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET } = require('../config/config');

router.post('/register', async (req, res) => {

   
    const {username, password, passwordConfirm, imageUrl} = req.body;

    let existingUser = await User.findOne({ username });
    if(existingUser) {
        return res.status(200).json({message: 'User already exists!'});
    }

    if(password.length < 5) {
        return res.send(JSON.stringify({message: 'Password must be at least 5 characters long!'}));
    }

    if (password != passwordConfirm) {
        return res.send(JSON.stringify({message: 'Passwords should match!'}));
    } else {
        let user = new User({username, password, imageUrl});
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
        return res.send(JSON.stringify({message: 'User doesn\'t exists!'}));
    }

    let areEqual = await bcrypt.compare(password, user.password);      
    if(!areEqual) {
        return res.send(JSON.stringify({message: 'Incorrect password!'}));
    } else {
        
        const token = jwt.sign({_id: user._id, username: user.username}, SECRET);
        return res.status(200).header('Authorization', 'Bearer '+ token).json({ user, token});
    }

})


module.exports = router;
