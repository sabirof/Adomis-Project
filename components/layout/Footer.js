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
      <div className="footer-container flex flex-wrap items-start pt-4 justify-center">
        {/* Logo Section */}
        <div className="w-full md:w-2/3 mb-8 md:mb-0 flex justify-center">
          <Image src="/images/logo.png" alt="Logo" width={600} height={600} className="object-contain" />
        </div>

        {/* Social Media Links, Contact, and Newsletter Section */}
        <div className="w-full md:w-full flex flex-col md:flex-row justify-between md:space-x-10">
          {/* Social Media Links */}
          <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0  p-4 rounded-lg social-links">
            <h3 className="text-xl font-bold mb-4">Follow us on</h3>
            <ul className="space-y-2">
              <li><Link href="https://instagram.com">Instagram</Link></li>
              <li><Link href="https://twitter.com">Twitter/X</Link></li>
              <li><Link href="https://linkedin.com">LinkedIn</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:w-2/3 mb-8 md:mb-0 p-4 rounded-lg contact-section">
            <h3 className="text-xl font-bold mb-4">{t('footer.contactTitle')}</h3>
            <p className="text-center">Email: info@adomis-project.de</p>
            <p className="text-center">Phone: 030 209346200</p>
            <p className="text-center">Address: Georgenstraße 47, 10117 Berlin</p>
          </div>

           {/* Newsletter Section */}
           <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0 p-4 rounded-lg newsletter-section">
            <h3 className="text-lg font-bold mb-4 text-center">{t('newsletter.newsletterTitle')}</h3>
            <p className="text-sm text-center">{t('newsletter.newsletterDescription')}</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4 w-full">
              <input
                type="email"
                name="email"
                placeholder={t('newsletter.newsletterPlaceholder')}
                className="px-2 py-1 w-3/4 md:w-auto rounded-lg focus:outline-none mb-2 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-1 rounded-lg transition duration-200 hover:bg-green-600 focus:outline-none text-sm"
              >
                {t('newsletter.newsletterSubscribe')}
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-2 text-center">
              {t('newsletter.newsletterPrivacy')} <Link href="/privacy-policy" className="text-blue-400 underline">{t('newsletter.newsletterPrivacyLink')}</Link>.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Sabir Maharramov and Pia Chwalczyk. All rights reserved.</p>
        <p>Developer: Sabir Maharramov - <Link href="mailto:maharram.sabir@gmail.com" className="text-blue-400 underline">maharram.sabir[at]gmail.com</Link><br />
           Designer: Pia Chwalczyk - <Link href="mailto:piachwalczyk@icloud.com" className="text-blue-400 underline">piachwalczyk[at]icloud.com</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
