import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary p-8 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>We are dedicated to providing the best service possible. Learn more about our mission and values.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><Link href='/'>Home</Link></li>
            <li className="mb-2"><Link href='/posts'>Blog</Link></li>
            <li className="mb-2"><Link href='/project'>Project</Link></li>
            <li className="mb-2"><Link href='/newsletter'>Newsletter</Link></li>
            <li className="mb-2"><Link href='/about'>About Us</Link></li>
            <li className="mb-2"><Link href='/contact'>Contact</Link></li>
            <li className="mb-2"><Link href='/privacy-policy'>Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: info@adomis-project.de</p>
          <p>Phone: 030 209346200</p>
          <p>Address: Georgenstraße 47, 10117 Berlin</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Adomis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
