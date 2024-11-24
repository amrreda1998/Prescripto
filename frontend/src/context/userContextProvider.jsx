// TokenProvider.jsx
import userContext from './userContext.js';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const DefaultUserdataPlaceHolder = {
    name: 'User',
    email: 'example@gmail.com',
    bio: '',
    image: '',
    gender: 'Not Selected', // Default gender value
    address: '',
    birthdate: '', // Default birthdate value
    phone: '',
  };
  const [userData, setUserData] = useState(DefaultUserdataPlaceHolder);

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
};
