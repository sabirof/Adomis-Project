import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Newsletter = () => {
  const { t } = useTranslation('newsletter');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent('Newsletter Subscription');
    const body = encodeURIComponent(`Please add this email to the newsletter list: ${email}`);
    window.location.href = `mailto:info@adomis-project.de?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-purple-900 text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-3">{t('newsletterTitle')}</h2>
          <p>{t('newsletterDescription')}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border-2 border-green-400 rounded-lg mb-4 md:mb-0 mr-0 md:mr-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletterPlaceholder')}
                className="px-4 py-2 w-full rounded-lg focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-400 text-white px-6 py-2 rounded-lg transition duration-200 hover:bg-green-600 focus:outline-none"
            >
              {t('newsletterSubscribe')}
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-3 text-center md:text-left">
  {t('newsletterPrivacy')}{' '}
  <Link href="/privacy-policy">
    <span className="text-blue-400 underline">{t('newsletterPrivacyLink')}</span>
  </Link>.
</p>

        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'newsletter'])),
    },
    revalidate: 1, // Use ISR to update the cached pages
  };
}

export default Newsletter;
