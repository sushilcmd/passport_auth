const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
// const authRoute = require('./route');

const googleAuthRoute = require('./google/googleRoute');
const facebookAuthRoute = require('./facebook/facebookRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/google', googleAuthRoute);
app.use('/auth/facebook', facebookAuthRoute);

app.listen(5002, "127.0.0.1", function(x) {
    console.log(`App is running on http://localhost:5002`);
});