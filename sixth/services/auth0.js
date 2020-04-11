import auth0 from 'auth0-js';
import config from './auth/config/auth_config.json';
import Cookies from 'js-cookie'

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
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.setSession = this.setSession.bind(this);
    }

    handleAuthentication() {
        debugger;
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                    console.log("authResult", authResult);
                } else {
                    reject(err)
                    console.log(err)
                }
            })
        });
    }

    setSession(authResult) {

        const { accessToken, expiresIn, idToken, idTokenPayload } = authResult;
        const expiredAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
        Cookies.set('user', idTokenPayload);
        Cookies.set('jwt', accessToken);
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

    isAuthenticated() {
        const expiredAt = Cookies.getJSON('expiresAt');
        return new Date().getTime < expiredAt;
    }
}

const auth0Client = new Auth0();
export default auth0Client;