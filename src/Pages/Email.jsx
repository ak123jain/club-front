import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Email = () => {
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (email) {
      // Send the email to the API here when the component mounts
      fetch(`${import.meta.env.VITE_API_URL}/user/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Email sent successfully:', data);
          alert('Email sent successfully!'); // Display alert on success
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          alert('There was an error sending the email. Please try again.'); // Display alert on error
        });
    }
  }, [email]);

  return (
    <div>
      {email ? (
        <p>Sending email to {email}...</p>
      ) : (
        <p>No email address found.</p>
      )}
    </div>
  );
};

export default Email;
