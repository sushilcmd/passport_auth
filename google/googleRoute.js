const router = require('express').Router();
const passport = require('passport');
const { google, afterGoogleLogin } = require('./googleController');
const { google: gConf } = require('../config');

google();
router.get('/', passport.authenticate('google', gConf["authenticateConfig"]));

router.get('/callback', passport.authenticate('google', gConf["failureConfig"]), afterGoogleLogin);

module.exports = router;