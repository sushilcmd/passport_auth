var passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const config = require('../config');

const facebook = function() {
    passport.use(new FacebookStrategy(config["facebook"], function(accessToken, refreshToken, profile, cb) {
        cb(null, {
            accessToken,
            refreshToken,
            profile
        });
    }))
}

const afterFblogin = function(req, res) {
    // Successful authentication, redirect home.
    // res.redirect('/');
    const user = req.user;
    const dd = req.query.code
    res.json({
        msg: 'Login with facebook',
        status: true,
        data: {
            ...req["user"],
            queryCode: req["query"]["code"]
        }
    });
}

module.exports = { facebook, afterFblogin };