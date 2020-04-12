import App from 'next/app'
// import Thrid-party JS
import auth0 from '../services/auth0';

// import Style Third-Party First
import 'bootstrap/dist/css/bootstrap.min.css';

// import Custome Style
import '../style/main.scss'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {

    const { ctx } = appContext;
    const isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx);
    const appProps = await App.getInitialProps(appContext);
    console.log("isAuthenticated", isAuthenticated)
    return { ...appProps }
}
export default MyApp;