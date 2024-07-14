import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { t } = useTranslation('common');
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth >= 768 && window.innerWidth <= 1120);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth >= 768 && window.innerWidth <= 1120);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <header className="relative w-full  md:flex-row md:justify-between">
      {/* Logo Section */}
      <div className="{`w-full ${menuOpen ? 'block' : 'hidden'} ${isMobile ? 'block' : 'hidden'}`} pt-20 md:pt-20 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 flex justify-center">
        <Link href="/">
          <Image src="/images/logo2.png" alt="Logo" width={300} height={300} priority />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="pt-10 pl-10 hamburger">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Navbar Section */}
      <nav className={`w-full ${menuOpen ? 'block' : 'hidden'} md:w-2/3 ${!isMobile ? 'lg:block' : ''}`}>

        <div className="container mx-auto flex flex-col md:flex-row md:justify-start items-center gap-4 pt-4 md:pt-20">
          <ul className="text-black flex flex-col md:flex-row gap-6 text-lg">
            <li>
              <Link href="/" className="hover:bg-accent p-2 rounded-md transition">
                {t('navbar.home')}
              </Link>
            </li>
            <li>
              <Link href="/vision" className="hover:bg-accent p-2 rounded-md transition">
                {t('navbar.vision')}
              </Link>
            </li>
            <li className="relative group">
              <Link href="/project" className="hover:bg-accent p-2 rounded-md transition">
                {t('navbar.project')}
              </Link>
              <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li>
                  <Link href="/project/interview-details" className="block px-3 py-1 hover:bg-accent rounded-t-md">
                    {t('navbar.interviewStudies')}
                  </Link>
                </li>
                <li>
                  <Link href="/project/survey-details" className="block px-3 py-1 hover:bg-accent rounded-b-md">
                    {t('navbar.surveyStudies')}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/news" className="hover:bg-accent p-2 rounded-md transition">
                {t('navbar.news')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:bg-accent p-2 rounded-md transition">
                {t('navbar.about')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:bg-accent p-2 rounded-md transition">
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
