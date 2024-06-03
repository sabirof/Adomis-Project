/* eslint-disable no-undef */
// components/layout/index.jsx

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
      <footer className='bg-primary text-sm font-medium uppercase text-stone-400 px-8 py-4'>
        <div className='container'>
        <Footer />
        </div>
      </footer>
    </>
  );
};

export default Layout;
