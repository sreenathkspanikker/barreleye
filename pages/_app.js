import { SSRProvider } from '@react-aria/ssr';
import { Layout } from '../components'
import "../assets/scss/main.scss"

function MyApp({ Component, pageProps }) {

  console.log(Component?.name);
  
    return (
      <SSRProvider>
        <Layout Component={Component?.name}>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    )
  }
  
  export default MyApp