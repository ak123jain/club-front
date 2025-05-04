import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle, XCircle, X } from 'lucide-react';

const Email = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    message: ''
  });

  useEffect(() => {
    if (email) {
      setLoading(true);
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
          setAlert({
            show: true,
            type: 'success',
            message: 'Your email has been added to the waitlist successfully!'
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setAlert({
            show: true,
            type: 'error',
            message: 'There was an error sending the email. Please try again.'
          });
          setLoading(false);
        });
    }
  }, [email]);

  const closeAlert = () => {
    setAlert({ ...alert, show: false });
  };

  // Auto-close the alert after 5 seconds
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        closeAlert();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [alert.show]);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Content based on state */}
        {loading ? (
          <div className="text-center p-8 border border-gray-800 rounded-lg bg-gray-900 bg-opacity-70">
            <div className="animate-pulse mb-4">
              <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
            </div>
            <p className="text-gray-400">Sending email to {email}...</p>
          </div>
        ) : !email ? (
          <div className="text-center p-8 border border-gray-800 rounded-lg bg-gray-900 bg-opacity-70">
            <XCircle className="text-red-500 mx-auto mb-4" size={48} />
            <p className="text-xl font-semibold mb-2">No Email Address Found</p>
            <p className="text-gray-400">Please return to the homepage and try again.</p>
          </div>
        ) : (
          <div className="text-center p-8 border border-gray-800 rounded-lg bg-gray-900 bg-opacity-70">
            <CheckCircle className="text-blue-400 mx-auto mb-4" size={48} />
            <p className="text-xl font-semibold mb-2">Email Processing Complete</p>
            <p className="text-gray-400">You'll hear from us soon!</p>
          </div>
        )}
        
        {/* Popup Alert */}
        {alert.show && (
          <div className={`fixed bottom-4 right-4 left-4 md:left-auto md:w-96 p-4 rounded-lg shadow-xl border ${
            alert.type === 'success' ? 'bg-green-900 bg-opacity-90 border-green-700' : 'bg-red-900 bg-opacity-90 border-red-700'
          } transform transition-transform duration-300 ease-in-out`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {alert.type === 'success' ? (
                  <CheckCircle className="text-green-400" size={24} />
                ) : (
                  <XCircle className="text-red-400" size={24} />
                )}
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-white">
                  {alert.type === 'success' ? 'Success!' : 'Error'}
                </p>
                <p className="mt-1 text-sm text-gray-200">
                  {alert.message}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-200"
                  onClick={closeAlert}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;