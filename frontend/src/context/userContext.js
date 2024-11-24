// UserContext.js
import { createContext, useContext } from "react";

const userContext = createContext(null); // Create the context with a default value of `null`

// Custom hook for consuming the context
export const useUser = () => useContext(userContext);

export default userContext;