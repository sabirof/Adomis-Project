import '../public/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Head from 'next/head'; // Import the Head component

const NoSSRLayout = dynamic(() => import('../components/layout/index'), { ssr: false });

const MyApp = ({ Component, pageProps }) => {
  return (
    <NoSSRLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Adomis</title> {/* Optional: Set a default title for your app */}
      </Head>
      <Component {...pageProps} />
    </NoSSRLayout>
  );
};

export default appWithTranslation(MyApp);
