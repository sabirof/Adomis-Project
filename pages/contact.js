import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

const ContactPage = () => {
  const { t } = useTranslation('contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@adomis-project.de?subject=Kontaktanfrage&body=%0D%0A%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}%0D%0A%0D%0A`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
      <form onSubmit={handleSubmit} className="bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-gray-400">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            {t('name')}
          </label>
          <input
            className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-700"
            id="name"
            type="text"
            placeholder={t('namePlaceholder')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            {t('email')}
          </label>
          <input
            className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-700"
            id="email"
            type="email"
            placeholder={t('emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            {t('message')}
          </label>
          <textarea
            className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-700"
            id="message"
            placeholder={t('messagePlaceholder')}
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-secondary hover:bg-green-500 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {t('send')}
          </button>
        </div>
      </form>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
    revalidate: 10,
  };
}

export default ContactPage;
