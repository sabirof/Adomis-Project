/* eslint-disable no-undef */
// components/layout/index.jsx

import Image from 'next/image';
import Footer from './Footer';
import Navbar from './Navbar';
import { useTranslation } from 'next-i18next';


const Layout = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation('common');
  return (
    <>
      <Navbar />
      <main className='container p-8'>{children}</main>
      <div className="flex items-center justify-start py-4">
        <div className="flex items-center">
          <p className="ml-4">{t('fundedBy')}</p>
          <Image src="/images/bua-logo.png" alt="Berlin University Alliance" width={150} height={150} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
