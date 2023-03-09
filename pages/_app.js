import { SSRProvider } from '@react-aria/ssr';
import { Layout } from '../components'
import "../assets/scss/main.scss"

function MyApp({ Component, pageProps }) {

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp