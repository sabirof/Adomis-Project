// pages/_app.js
import '../public/styles/globals.css';

import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

const NoSSRLayout = dynamic(() => import('../components/layout/index'), { ssr: false });

const MyApp = ({ Component, pageProps }) => {
  return (
    <NoSSRLayout>
      <Component {...pageProps} />
    </NoSSRLayout>
  );
};

export default appWithTranslation(MyApp);
