// userAppointmentsContext.js
import { createContext, useContext } from "react";

const AppointmentsContext = createContext(null); // Create the context with a default value of `null`

// Custom hook for consuming the context
export const useAppointments = () => useContext(AppointmentsContext);

export default AppointmentsContext;
