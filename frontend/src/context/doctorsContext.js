// doctorsContext.js
import { createContext, useContext } from 'react';

const DoctorsContext = createContext(null); // Create the context with a default value of `null`

// Custom hook for consuming the context
export const useDoctors = () => useContext(DoctorsContext);

export default DoctorsContext;
