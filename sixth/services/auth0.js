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
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
    }

    handleAuthentication() {
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
    setSession() {
        // Save Token Here
    }

    login() {
        this.auth0.authorize();
    }
}

const auth0Client = new Auth0();
export default auth0Client;