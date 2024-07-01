import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className='bg-primary p-8 text-white'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-bold mb-4'>{t('footer.aboutTitle')}</h3>
          <p>{t('footer.aboutContent')}</p>
        </div>
        <div>
          <h3 className='text-xl font-bold mb-4'>{t('footer.quickLinks')}</h3>
          <ul>
            <li className='mb-2'><Link href='/'>{t('navbar.home')}</Link></li>
            <li className='mb-2'><Link href='/news'>{t('navbar.news')}</Link></li>
            <li className='mb-2'><Link href='/project'>{t('navbar.project')}</Link></li>
            <li className='mb-2'><Link href='/about'>{t('navbar.about')}</Link></li>
            <li className='mb-2'><Link href='/contact'>{t('navbar.contact')}</Link></li>
            <li className='mb-2'><Link href='/privacy-policy'>{t('navbar.privacyPolicy')}</Link></li>
          </ul>
        </div>
      </div>
      <div className='text-center mt-8'>
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
