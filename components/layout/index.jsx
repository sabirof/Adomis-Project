// components/layout/index.jsx
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='container p-8'>{children}</main>
      <footer className='bg-stone-100 text-sm font-medium uppercase text-stone-400 px-8 py-4'>
        <div className='container'>
        <Footer />
        </div>
      </footer>
    </>
  );
};

export default Layout;
