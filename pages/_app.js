import { SSRProvider } from '@react-aria/ssr';
import { Layout } from '../components'
import "../assets/scss/main.scss"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  
    return (
      <SSRProvider>
        <Layout Component={Component.name}>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    )
  }
  
  export default MyApp