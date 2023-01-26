import '../styles/globals.scss'
// import ScrollObserver from '../utils/scroll-observer.jsx'

function App({ Component, pageProps }) {
  return (
    // <ScrollObserver>
      <Component {...pageProps} />
    // </ScrollObserver>
  )
}

export default App;
