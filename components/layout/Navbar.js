import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <header className="relative flex items-center justify-between w-full pt-20">
      {/* Navbar Section */}
      <nav className="w-2/3">
        <div className="container mx-auto flex justify-start items-center gap-4">
          <ul className="text-black flex gap-6 text-lg">
            <li>
              <Link href="/" className="hover:bg-purple-200 p-2 rounded-md transition">
                {t('navbar.home')}
              </Link>
            </li>
            <li>
              <Link href="/vision" className="hover:bg-purple-200 p-2 rounded-md transition">
                {t('navbar.vision')}
              </Link>
            </li>
            <li>
              <Link href="/project" className="hover:bg-purple-200 p-2 rounded-md transition">
                {t('navbar.project')}
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:bg-purple-200 p-2 rounded-md transition">
                {t('navbar.news')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:bg-purple-200 p-2 rounded-md transition">
                {t('navbar.about')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:bg-purple-200 p-2 rounded-md transition">
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Logo Section */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-4 pt-40">
        <Link href="/">
          <Image src="/images/logo2.png" alt="Logo" width={300} height={300} priority />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
