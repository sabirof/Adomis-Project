import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import { useState } from 'react';

const Navbar = () => {
  const { t } = useTranslation('common');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-primary p-4 sm:p-8'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex-shrink-0'>
          <Image src='/images/logo.png' alt='Logo' className='h-16 w-24' width={96} height={64} />
        </Link>

        {/* Navigation Links */}
        <div className='hidden md:flex md:flex-grow justify-center'>
          <ul className='flex text-white gap-4'>
            <li><Link href='/'>{t('navbar.home')}</Link></li>
            <li><Link href='/posts'>{t('navbar.blog')}</Link></li>
            <li><Link href='/project'>{t('navbar.project')}</Link></li>
            <li><Link href='/survey'>{t('navbar.survey')}</Link></li>
            <li><Link href='/newsletter'>{t('navbar.newsletter')}</Link></li>
            <li><Link href='/about'>{t('navbar.about')}</Link></li>
            <li><Link href='/contact'>{t('navbar.contact')}</Link></li>
            <li><Link href='/privacy-policy'>{t('navbar.privacyPolicy')}</Link></li>
          </ul>
        </div>

        {/* Language Switcher */}
        <div className='flex items-center'>
          <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
              ☰
            </button>
          </div>
          <div className={`hidden md:block ${menuOpen ? 'block' : ''}`}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className='md:hidden'>
          <ul className='flex flex-col text-white'>
            <li><Link href='/' onClick={() => setMenuOpen(false)}>{t('navbar.home')}</Link></li>
            <li><Link href='/posts' onClick={() => setMenuOpen(false)}>{t('navbar.blog')}</Link></li>
            <li><Link href='/project' onClick={() => setMenuOpen(false)}>{t('navbar.project')}</Link></li>
            <li><Link href='/survey' onClick={() => setMenuOpen(false)}>{t('navbar.survey')}</Link></li>
            <li><Link href='/newsletter' onClick={() => setMenuOpen(false)}>{t('navbar.newsletter')}</Link></li>
            <li><Link href='/about' onClick={() => setMenuOpen(false)}>{t('navbar.about')}</Link></li>
            <li><Link href='/contact' onClick={() => setMenuOpen(false)}>{t('navbar.contact')}</Link></li>
            <li><Link href='/privacy-policy' onClick={() => setMenuOpen(false)}>{t('navbar.privacyPolicy')}</Link></li>
            <li className='mt-4'><LanguageSwitcher /></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
