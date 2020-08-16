import '../styles/global.scss'

// Stuff here will apply to every page, so be careful!
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}