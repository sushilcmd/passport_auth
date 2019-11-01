const config = {
    redirectUrl: `https://www.google.com`,
    facebook: {
        clientID: 920083475034364,
        clientSecret: "cca21d973d74d60e409e3db3e45f9f63",
        callbackURL: "http://localhost:5002/auth/facebook/callback",
        authenticateConfig: { session: false },
        failureConfig: { session: false, failureRedirect: '/login' }

    },
    google: {
        clientID: "586786012854-s06qk9e9pcsf6uu2ptifgmj5lf4c2snk.apps.googleusercontent.com",
        clientSecret: "I7ghLTSSdw870NEUoiMPxIr-",
        callbackURL: "http://localhost:5002/auth/google",
        authenticateConfig: { session: false, scope: ['https://www.googleapis.com/auth/plus.login'] },
        failureConfig: { failureRedirect: '/login', session: false }
    }
}

module.exports = config;