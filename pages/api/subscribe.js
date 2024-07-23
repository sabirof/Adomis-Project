// pages/api/subscribe.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      console.error('Email is missing');
      return res.status(400).json({ error: 'Email is required' });
    }

    console.log('Received email:', email);

    try {
      const response = await fetch('https://api.beehiiv.com/v2/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({ email }),
      });

      const textResponse = await response.text();
      console.log('Beehiiv API raw response:', textResponse);

      if (!textResponse) {
        console.error('Empty response from Beehiiv API');
        return res.status(500).json({ error: 'Empty response from Beehiiv API' });
      }

      let responseData;
      try {
        responseData = JSON.parse(textResponse);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return res.status(500).json({ error: 'Error parsing response from Beehiiv API' });
      }

      console.log('Beehiiv API parsed response data:', responseData);

      if (response.status >= 400) {
        console.error('Error from Beehiiv API:', responseData);
        return res.status(400).json({ error: responseData.message || 'There was an error subscribing to the newsletter.' });
      }

      return res.status(201).json({ message: 'Successfully subscribed to the newsletter' });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
