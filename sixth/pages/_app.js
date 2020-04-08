// import Style Third-Party First
import 'bootstrap/dist/css/bootstrap.min.css';

// import Custome Style
import '../style/header.scss'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}