import auth0 from 'auth0-js';
import config from './auth/config/auth_config.json';
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken';

class Auth0 {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: config.domain,
            clientID: config.clientId,
            redirectUri: 'http://localhost:3009/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        // this.clientAuth = this.clientAuth(this);
        // this.serverAuth = this.serverAuth(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.setSession = this.setSession.bind(this);
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else {
                    reject(err)
                    console.log(err)
                }
            })
        });
    }

    setSession(authResult) {
        console.log("authResult", authResult)
        const { accessToken, expiresIn, idToken, idTokenPayload } = authResult;
        const expiredAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
        Cookies.set('user', idTokenPayload);
        Cookies.set('jwt', idToken);
        Cookies.set('expiresAt', expiredAt);
    }

    logout() {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');

        this.auth0.logout({
            returnTo: '',
            clientID: config.clientId
        })
    }

    login() {
        this.auth0.authorize();
    }

    verifyToken(token) {
        if (token) {
            const decodedToken = jwt.decode(token);
            const expiredAt = decodedToken.exp * 1000;
            return (decodedToken && new Date().getTime() < expiredAt) ? decodedToken : undefined;
        }
        return undefined;
    }

    isAuthenticated() {
        const expiredAt = Cookies.getJSON('expiresAt');
        return new Date().getTime() < expiredAt;
    }

    clientAuth() {
        const token = Cookies.getJSON('jwt');
        const verifiedToken = this.verifyToken(token);
        return verifiedToken;
    }

    serverAuth({ req }) {
        if (req.headers.cookie) {
            const jwtAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt'));
            if (!jwtAtCookie) {
                return undefined;
            } else {
                const jwtToken = jwtAtCookie.split('=')[1];
                const verifiedToken = this.verifyToken(jwtToken)
                return verifiedToken;
            }
        }
        return undefined;
    }

}

const auth0Client = new Auth0();
export default auth0Client;