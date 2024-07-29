// pages/newsletter.js

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Newsletter = () => {
  const { t } = useTranslation('newsletter');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const mailtoLink = `mailto:info@adomis-project.de?subject=Newsletter Subscription Request&body=Dear Adomis Team,%0D%0A%0D%0AI would love to stay updated with all the latest news and insights. Please subscribe me to the newsletter list.%0D%0A%0D%0A${t('name')}: ${name}%0D%0A${t('email')}: ${email}%0D%0A%0D%0AThank you.`;

      window.location.href = mailtoLink;
      setStatus(t('statusSuccess'));
    } catch (error) {
      console.error('Error subscribing:', error);
      setStatus(t('statusError'));
    }
  };

  return (
    <div>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center py-20">
        <div className="bg-primary text-white p-20 rounded shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">{t('title')}</h1>
          <p className="mb-8 text-center">{t('description')}</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              name="name"
              placeholder={t('namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-2 mb-4 w-full max-w-xs rounded text-black"
            />
            <input
              type="email"
              name="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 mb-4 w-full max-w-xs rounded text-black"
            />
            <button type="submit" className="p-2 bg-secondary hover:bg-green-400 text-gray-600 hover:text-gray-800 rounded shadow w-full max-w-xs">
              {t('subscribeButton')}
            </button>
          </form>
          {status && (
            <p className={`mt-4 text-center ${status.startsWith(t('statusSuccess').split(' ')[0]) ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </p>
          )}
          <p className="mt-4 text-center">
            {t('privacyPolicy')}{' '}
            <Link href="/privacy-policy">
              <div className="text-secondary hover:underline">{t('privacyPolicyLink')}</div>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['newsletter', 'common'])),
    },
  };
}

export default Newsletter;
