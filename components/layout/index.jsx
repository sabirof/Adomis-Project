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
          <Image src="/images/bua-logo.png" alt="Berlin University Alliance" width={200} height={100} />
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
