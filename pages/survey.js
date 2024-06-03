// pages/survey.js

import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const SurveySubscribe = () => {
  const { t } = useTranslation('survey');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    window.location.href = `mailto:info@adomis-project.de?subject=Survey Subscription&body=Email: ${email}`;
  };

  return (
    <div className="bg-purple-900 text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-3">{t('surveySubscribeTitle')}</h2>
          <p>{t('surveySubscribeDescription')}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border-2 border-green-400 rounded-lg mb-4 md:mb-0 mr-0 md:mr-4">
              <input
                type="email"
                name="email"
                placeholder={t('surveySubscribePlaceholder')}
                className="px-4 py-2 w-full rounded-lg focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-400 text-white px-6 py-2 rounded-lg transition duration-200 hover:bg-green-600 focus:outline-none"
            >
              {t('surveySubscribeButton')}
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-3 text-center md:text-left">
            {t('surveyPrivacy')} <a href="/privacy-policy" className="text-blue-400 underline">{t('surveyPrivacyLink')}</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'survey'])),
    },
    revalidate: 1, // Use ISR to update the cached pages
  };
}

export default SurveySubscribe;
