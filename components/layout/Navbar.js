import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <nav className='bg-primary p-8'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' legacyBehavior>
          <Image src='/images/logo.png' alt='Logo' className='h-16 w-24' width={80} height={80} priority style={{ width: 'auto', height: 'auto' }} />
        </Link>
        <ul className='text-white flex gap-4'>
        <li><Link href='/' legacyBehavior>{t('navbar.home')}</Link></li>
          <li><Link href='/vision' legacyBehavior>{t('navbar.vision')}</Link></li>
          <li><Link href='/project' legacyBehavior>{t('navbar.project')}</Link></li>
          <li><Link href='/news' legacyBehavior>{t('navbar.news')}</Link></li>
          <li><Link href='/about' legacyBehavior>{t('navbar.about')}</Link></li>
          <li><Link href='/contact' legacyBehavior>{t('navbar.contact')}</Link></li>
        </ul>
        <div className='flex gap-4'>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
