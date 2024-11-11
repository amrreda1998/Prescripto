// TokenContext.js
import { createContext, useContext } from "react";

const TokenContext = createContext(null); // Create the context with a default value of `null`

// Custom hook for consuming the context
export const useToken = () => useContext(TokenContext);

export default TokenContext;
