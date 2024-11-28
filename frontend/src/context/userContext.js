// UserContext.js
import { createContext, useContext } from 'react';

const userContext = createContext(null); // Create the context with a default value of `null`
export const DefaultUserdataPlaceHolder = {
  name: 'User',
  email: 'example@gmail.com',
  bio: '',
  image: '',
  gender: 'Not Selected', // Default gender value
  address: '',
  birthdate: '', // Default birthdate value
  phone: '',
};
// Custom hook for consuming the context
export const useUser = () => useContext(userContext);

export default userContext;
