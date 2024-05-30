import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <nav className='bg-primary p-8'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/'>
          <img src='/images/logo.png' alt='Logo' className='h-16 w-24' />
        </Link>
        <ul className='text-white flex gap-4'>
          <li><Link href='/'>{t('navbar.home')}</Link></li>
          <li><Link href='/posts'>{t('navbar.blog')}</Link></li>
          <li><Link href='/project'>{t('navbar.project')}</Link></li>
          <li><Link href='/survey'>{t('navbar.survey')}</Link></li>
          <li><Link href='/newsletter'>{t('navbar.newsletter')}</Link></li>
          <li><Link href='/about'>{t('navbar.about')}</Link></li>
          <li><Link href='/contact'>{t('navbar.contact')}</Link></li>
          <li><Link href='/privacy-policy'>{t('navbar.privacyPolicy')}</Link></li>
          
        </ul>
        <div className='flex gap-4'>
         

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
