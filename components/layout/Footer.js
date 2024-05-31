import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">{t('footer.aboutTitle')}</h3>
          <p className="text-sm">{t('footer.aboutContent')}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">{t('footer.quickLinks')}</h3>
          <ul className="text-sm">
            <li className="mb-1"><Link href="/">{t('navbar.home')}</Link></li>
            <li className="mb-1"><Link href="/posts">{t('navbar.blog')}</Link></li>
            <li className="mb-1"><Link href="/project">{t('navbar.project')}</Link></li>
            <li className="mb-1"><Link href="/newsletter">{t('navbar.newsletter')}</Link></li>
            <li className="mb-1"><Link href="/about">{t('navbar.about')}</Link></li>
            <li className="mb-1"><Link href="/contact">{t('navbar.contact')}</Link></li>
            <li className="mb-1"><Link href="/privacy-policy">{t('navbar.privacyPolicy')}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">{t('footer.contactTitle')}</h3>
          <p className="text-sm whitespace-pre-line">{t('footer.contactDetails')}</p>
        </div>
      </div>
      <div className="text-center mt-4 text-sm">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
