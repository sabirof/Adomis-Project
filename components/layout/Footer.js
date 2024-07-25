import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-primary p-8 text-white w-full">
      <div className="footer-container flex flex-wrap items-left pt-4 justify-center custom:flex-col customLg:flex-row">
        {/* Logo Section */}
        <div className="w-full md:w-2/3 mb-8 md:mb-20 flex justify-center">
          <Image src="/images/logo.png" alt="Logo" width={600} height={600} className="object-contain" />
        </div>

        {/* Social Media Links, Contact, and Newsletter Section */}
        <div className="w-full md:w-full flex flex-col md:flex-row justify-between md:space-x-10">
          {/* Social Media Links */}
          <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0 p-4 rounded-lg social-links">
            <h3 className="text-3xl md:text-2xl font-bold mb-4">Follow us on</h3>
            <ul className="space-y-2 text-xl md:text-lg">
              <li><Link href="https://instagram.com">Instagram</Link></li>
              <li><Link href="https://twitter.com">Twitter/X</Link></li>
              <li><Link href="https://linkedin.com">LinkedIn</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col md:w-2/3 mb-8 md:mb-0 p-4 rounded-lg contact-section">
            <h3 className="text-3xl md:text-2xl text-center font-bold mb-4">{t('footer.contactTitle')}</h3>
            <p className="text-center text-xl md:text-lg">info@adomis-project.de</p>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0 p-4 rounded-lg newsletter-section">
            <h3 className="text-3xl md:text-2xl font-bold mb-4 text-center">{t('newsletter.newsletterTitle')}</h3>
            <Link href="/newsletter">
              <div className="flex items-center justify-between bg-secondary text-primary px-10 py-5 rounded-lg transition duration-200 hover:bg-green-600 focus:outline-none text-2xl">
                <span>{t('newsletter.newsletterSubscribe')}</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 9.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 15H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-60 text-xl md:text-lg">
        <p>© 2024 Sabir Maharramov and Pia Chwalczyk. All rights reserved.</p>
        <p>Developer: Sabir Maharramov - <Link href="mailto:maharram.sabir@gmail.com" className="text-blue-400 underline">maharram.sabir[at]gmail.com</Link><br />
          Designer: Pia Chwalczyk - <Link href="mailto:piachwalczyk@icloud.com" className="text-blue-400 underline">piachwalczyk[at]icloud.com</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
