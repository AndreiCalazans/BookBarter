const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp =  new Date().getTime();
    // sub means subject or who is this token about
    // iat means issue at time.
    return jwt.encode({ sub: user.id , iat: timestamp } , config.secret);
}

exports.signin = function(req, res , next) {
    // User has already had their email and password Auth
    // just need to give them token
    const userAccount = {
                token : tokenForUser(req.user),
                id: req.user._id,
                name: req.user.name,
                address: req.user.address,
                city: req.user.city,
                state: req.user.state,
                country: req.user.country
            }
    res.send(userAccount);
}

exports.signup = function(req , res, next) {
   
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const name = req.body.name;

    if (!email || !password) {
        return res.status(422).send({error: 'You must provide email and password'});
    }
    
    //see if a user with the given email exist
    User.findOne({email: email}, function (err , existingUser) {
        if(err) { return next(err);}

    //if a user with email does exist, return an error
        if (existingUser) {
            return res.status(422).send({error: 'Email is in user'});
        }
    //if a user with email does not exist, create and save user record
        const user = new User({
            email: email,
            password: password,
            name: name,
            address: address,
            city: city,
            state: state,
            country: country
        });

        user.save(function(err) {
            if (err) {return next(err);}

    //repond to request indicating the user was created
            const userAccount = {
                token : tokenForUser(user),
                id: user._id,
                name: user.name,
                address: user.address,
                city: user.city,
                state: user.state,
                country: user.country
            }
            res.json(userAccount);
        });

    })
};

exports.updateUser = function(req , res , next) {
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const name = req.body.name;

    User.findOne({_id: req.user._id}, function(err, user) {
        user.address = address;
        user.city = city;
        user.state = state;
        user.country = country;

        user.save(function(err) {
            if (err) res.send('there was an error with saving');

            res.send('User updated');
        }) 
    })
}