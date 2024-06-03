import '../public/styles/globals.css'
import Layout from '../components/layout/index'
import { appWithTranslation } from 'next-i18next'


const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp)
