import auth0 from 'auth0-js';
import config from './auth/config/auth_config.json';

class Auth0 {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: config.domain,
            clientID: config.clientId,
            redirectUri: 'http://localhost:3009/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });
        this.login = this.login.bind(this)
    }
    login() {
        this.auth0.authorize();
    }
}

const auth0Client = new Auth0();
export default auth0Client;