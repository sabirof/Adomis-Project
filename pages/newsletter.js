// pages/newsletter.js

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus('Thank you for subscribing!');
        setEmail('');
      } else {
        console.error('Error response from server:', result);
        setStatus(`Failed to subscribe. ${result.error}`);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setStatus('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div>
      <Head>
        <title>Subscribe to Our Newsletter</title>
        <meta name="description" content="Subscribe to our newsletter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Subscribe to Our Newsletter</h1>
        <p>Stay updated with the latest news and updates from our research projects.</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%', maxWidth: '400px' }}
          />
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Subscribe
          </button>
        </form>
        {status && <p style={{ marginTop: '1rem', color: status.startsWith('Thank') ? 'green' : 'red' }}>{status}</p>}
        <p style={{ marginTop: '1rem' }}>
          Read our <Link href="/privacy-policy"><div style={{ color: '#0070f3' }}>privacy policy</div></Link> to learn more about how we use your information.
        </p>
      </main>
    </div>
  );
};

export default Newsletter;
