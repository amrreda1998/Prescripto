// TokenProvider.jsx
import TokenContext from './tokenContext';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('userToken'));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
