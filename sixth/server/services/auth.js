const jwt = require('express-jwt');
const jwksClient = require('jwks-rsa')

// middleware => checking token is valid or not
exports.checkJWT = jwt({
    secret: jwksClient({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-amien-portfolio.auth0.com/.well-known/jwks.json'
    }),
    audience: "NLE4uh7ePcdcEdws8vQoK2T4aFfWD83W", // is the client id
    issuer: "https://dev-amien-portfolio.auth0.com", // is the domain
    algorithms: ['RS256']
})
