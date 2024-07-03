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
        <div className="pr-12">
          <Image src="/images/logo.png" alt="Logo" width={600} height={600} className="object-contain" />
        </div>

        {/* Social Media Links, Contact, and Newsletter Section */}
        <div className="flex flex-grow items-start justify-between ml-16 space-x-8 pt-24 pl-24">
          {/* Social Media Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Follow us on</h3>
            <ul className="space-y-2">
              <li><Link href="https://instagram.com"><div target="_blank" rel="noopener noreferrer">Instagram</div></Link></li>
              <li><Link href="https://twitter.com"><div target="_blank" rel="noopener noreferrer">Twitter/X</div></Link></li>
              <li><Link href="https://linkedin.com"><div target="_blank" rel="noopener noreferrer">LinkedIn</div></Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">{t('footer.contactTitle')}</h3>
            <p>Email: info@adomis-project.de</p>
            <p>Phone: 030 209346200</p>
            <p>Address: Georgenstraße 47, 10117 Berlin</p>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col justify-center max-w-xs">
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
              {t('newsletter.newsletterPrivacy')} <Link href="/privacy-policy"><div className="text-blue-400 underline">{t('newsletter.newsletterPrivacyLink')}</div></Link>.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Sabir Maharramov and Pia Chwalczyk. All rights reserved.  </p>
        <p>Developer: Sabir Maharramov - <a href="mailto:maharram.sabir@gmail.com" className="text-blue-400 underline">maharram.sabir@gmail.com</a><br />
           Designer: Pia Chwalczyk - <a href="mailto:piachwalczyk@icloud.com" className="text-blue-400 underline">piachwalczyk@icloud.com</a>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
