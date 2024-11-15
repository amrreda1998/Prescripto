// userAppointmentsContextProvider.jsx
import AppointmentsContext from "./AppointmentsContext";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};
