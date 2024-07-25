import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { t } = useTranslation('common');
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="relative w-full md:flex-row md:justify-between">
      <div className={`logo-navbar-wrapper ${menuOpen && isMobile ? '' : 'pt-20'}`}>
        {/* Logo Section */}
        <div className={`md:pt-40 lg:pt-20 ${menuOpen && isMobile ? 'pt-20' : ''} md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 flex justify-center`}>
          <Link href="/">
            <Image src="/images/logo2.png" alt="Logo" width={menuOpen && isMobile ? 500 : 300} height={menuOpen && isMobile ? 500 : 300} priority />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className={`pt-20 ${menuOpen ? 'md-900:pt-30' : ''} hamburger`}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              viewBox="0 0 32 32"
              enableBackground="new 0 0 32 32"
              id="Filled_Line"
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              transform="rotate(90)"
              width="100"
              height="50"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <line
                  fill="none"
                  id="XMLID_840_"
                  stroke="#200D41"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  x1="16"
                  x2="16"
                  y1="7"
                  y2="25"
                ></line>
                <line
                  fill="none"
                  id="XMLID_839_"
                  stroke="#200D41"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  x1="7"
                  x2="7"
                  y1="7"
                  y2="25"
                ></line>
                <line
                  fill="none"
                  id="XMLID_838_"
                  stroke="#200D41"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  x1="25"
                  x2="25"
                  y1="7"
                  y2="25"
                ></line>
              </g>
            </svg>
          </button>
        </div>

        {/* Navbar Section */}
        <nav className={`w-full ${menuOpen ? 'block' : 'hidden'} md:w-2/3 ${!isMobile ? 'lg:block' : ''}`}>
          <div className={`container mx-auto flex flex-col ${menuOpen ? 'gap-6 pt-20 ' : 'md:flex-row pt-4'} md:justify-start items-center gap-4`}>
            <ul className={`text-black flex flex-col ${menuOpen ? 'gap-6' : 'md:flex-row gap-6'} text-lg`}>
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
                <ul className={`absolute ${isMobile ? 'left-full top-0' : 'left-0 mt-2'} md:left-auto md:right-full md:mt-0 md:ml-2 w-40 bg-white border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>

                  <li>
                    <Link href="/project/interview-details" className="block px-3 py-1 text-sm hover:bg-accent rounded-t-md">
                      {t('navbar.interviewStudies')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/project/survey-details" className="block px-3 py-1 text-sm hover:bg-accent rounded-b-md">
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
      </div>
    </header>
  );
};

export default Navbar;
