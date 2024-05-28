import '../public/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/layout/index';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
