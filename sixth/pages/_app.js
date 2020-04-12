import App from 'next/app'
// import Thrid-party JS
import auth0 from '../services/auth0';

// import Style Third-Party First
import 'bootstrap/dist/css/bootstrap.min.css';

// import Custome Style
import '../style/main.scss'

function MyApp(appProps) {
    const { Component, pageProps, auth } = appProps;

    return <Component {...pageProps} {...auth} />
}

MyApp.getInitialProps = async (appContext) => {

    const { ctx } = appContext;
    const user = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx);
    const auth = { user, isAuthenticated: !!user };
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps, auth }
}
export default MyApp;