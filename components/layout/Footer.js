import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-primary p-8 text-white w-full">
      <div className="footer-container flex flex-col items-center pt-4 justify-center">
        

        {/* Contact and Newsletter Section */}
        <div className="w-full flex flex-col items-center space-y-8">
          {/* Contact Section */}
          <div className="w-full flex flex-col items-center p-4 rounded-lg contact-section">
            <h3 className="text-3xl md:text-2xl text-center font-bold mb-4">{t('footer.contactTitle')}</h3>
            <p className="text-center text-xl md:text-lg">info@adomis-project.de</p>
          </div>

          {/* Newsletter Section */}
          
          <div className="w-full flex flex-col items-center p-4 rounded-lg newsletter-section">
            <h3 className="text-3xl md:text-2xl font-bold mb-4 text-center">{t('newsletter.newsletterTitle')}</h3>
            <Link href="/newsletter">
              <div className="flex items-center justify-between bg-secondary text-primary px-10 py-5 rounded-lg transition duration-200 hover:bg-green-400 focus:outline-none text-2xl">
                <span>{t('newsletter.newsletterSubscribe')}</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 9.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 15H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
            </div>
            {/* Text Section */}
        <div className="w-full mb-8 p-4 rounded-sm text-center">
  <p className="text-base md:text-basefont-bold leading-relaxed text-white">{t('footer.stayUpdated')}</p>
</div>
          
        </div>
      </div>
      <div className="text-center mt-16 text md:text-lg">
        <p>© 2024 Sabir Maharramov and Pia Chwalczyk. All rights reserved.</p>
        <p>Developer: Sabir Maharramov - <Link href="mailto:maharram.sabir@gmail.com" className="text-blue-400 underline">maharram.sabir[at]gmail.com</Link><br />
          Designer: Pia Chwalczyk - <Link href="mailto:piachwalczyk@icloud.com" className="text-blue-400 underline">piachwalczyk[at]icloud.com</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
