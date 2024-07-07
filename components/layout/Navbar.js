import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <header className="relative flex items-center justify-between w-full">
      {/* Navbar Section */}
      <nav className="bg-primary p-4 w-2/3">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="text-white flex gap-4">
            <li><Link href="/" legacyBehavior>{t('navbar.home')}</Link></li>
            <li><Link href="/vision" legacyBehavior>{t('navbar.vision')}</Link></li>
            <li><Link href="/project" legacyBehavior>{t('navbar.project')}</Link></li>
            <li><Link href="/news" legacyBehavior>{t('navbar.news')}</Link></li>
            <li><Link href="/about" legacyBehavior>{t('navbar.about')}</Link></li>
            <li><Link href="/contact" legacyBehavior>{t('navbar.contact')}</Link></li>
          </ul>
          <div className="flex gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Logo Section */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-4 pt-40">
        <Link href="/" legacyBehavior>
          <Image src="/images/logo2.png" alt="Logo" width={300} height={300} priority />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
