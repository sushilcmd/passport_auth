const router = require('express').Router();
const passport = require('passport');
const { facebook, afterFblogin } = require('./facebookController');
const { facebook: fbConf } = require('../config');

facebook()
router.get('/', passport.authenticate('facebook', fbConf["authenticateConfig"]));
router.get('/callback', passport.authenticate('facebook', fbConf["failureConfig"]), afterFblogin);

module.exports = router;