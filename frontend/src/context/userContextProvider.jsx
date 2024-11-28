// TokenProvider.jsx
import userContext, { DefaultUserdataPlaceHolder } from './userContext.js';
import { useState, useEffect } from 'react';
import { useToken } from './tokenContext';
import { backendURL } from './../constants/backendURL';

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(DefaultUserdataPlaceHolder);
  const { token } = useToken();

  // Function to fetch user data from API
  const fetchData = async () => {
    try {
      const response = await fetch(`${backendURL}/api/user/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching data from the server');
      }

      const { userInfo } = await response.json();
      setUserData(userInfo);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData(); // Fetch user data when the component mounts
    }
  }, [token]);

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
};
