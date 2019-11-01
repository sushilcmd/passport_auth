const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('../config');

const google = function() {
    passport.use(new GoogleStrategy(config["google"],
        function(accessToken, refreshToken, profile, cb) {
            cb(null, { accessToken, refreshToken, profile })
        }
    ));
}

const afterGoogleLogin = function(req, res) {
    //Successfull authentication, redirect to landing page.
    // res.redirect('/');
    res.json({
        msg: 'Login with google',
        status: true,
        data: {
            ...req["user"],
            queryCode: req["query"]["code"]
        }
    });
}

module.exports = { google, afterGoogleLogin };