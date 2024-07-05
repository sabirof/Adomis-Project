import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const Footer = () => {
  const { t } = useTranslation('common');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your email submission logic here
  };

  return (
    <footer className="bg-primary p-8 text-white w-full">
      <div className="flex flex-wrap items-start pt-4">
        {/* Logo Section */}
        <div className="pr-12 mb-8 md:mb-0 md:pr-12 flex justify-center md:block">
          <Image src="/images/logo.png" alt="Logo" width={600} height={600} className="object-contain" />
        </div>

        {/* Social Media Links, Contact, and Newsletter Section */}
        <div className="flex flex-wrap items-start justify-between flex-grow md:ml-16 space-y-8 md:space-y-0 md:space-x-8 pt-12">
          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Follow us on</h3>
            <ul className="space-y-2">
              <li><Link href="https://instagram.com">Instagram</Link></li>
              <li><Link href="https://twitter.com">Twitter/X</Link></li>
              <li><Link href="https://linkedin.com">LinkedIn</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">{t('footer.contactTitle')}</h3>
            <p>Email: info@adomis-project.de</p>
            <p>Phone: 030 209346200</p>
            <p>Address: Georgenstraße 47, 10117 Berlin</p>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start max-w-xs">
            <h3 className="text-lg font-bold mb-4">{t('newsletter.newsletterTitle')}</h3>
            <p className="text-sm">{t('newsletter.newsletterDescription')}</p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-start mt-4">
              <input
                type="email"
                name="email"
                placeholder={t('newsletter.newsletterPlaceholder')}
                className="px-2 py-1 w-full md:w-auto rounded-lg focus:outline-none mb-2 md:mb-0 md:mr-2 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-green-400 text-white px-4 py-1 rounded-lg transition duration-200 hover:bg-green-600 focus:outline-none text-sm"
              >
                {t('newsletter.newsletterSubscribe')}
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-2">
              {t('newsletter.newsletterPrivacy')} <Link href="/privacy-policy" className="text-blue-400 underline">{t('newsletter.newsletterPrivacyLink')}</Link>.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Sabir Maharramov and Pia Chwalczyk. All rights reserved.  </p>
        <p>Developer: Sabir Maharramov - <Link href="mailto:maharram.sabir@gmail.com" className="text-blue-400 underline">maharram.sabir@gmail.com</Link><br />
           Designer: Pia Chwalczyk - <Link href="mailto:piachwalczyk@icloud.com" className="text-blue-400 underline">piachwalczyk@icloud.com</Link>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
