// userAppointmentsContextProvider.jsx
import AppointmentsContext from './AppointmentsContext';
import { useEffect, useState } from 'react';
import { useToken } from './tokenContext';
import { backendURL } from './../constants/backendURL';

// eslint-disable-next-line react/prop-types
export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const { token } = useToken();
  // Function to fetch user data from API
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${backendURL}/api/appointments/user/get-all-appointments`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { message, allAppointments } = await response.json();
      if (!response.ok) {
        throw new Error(message);
      }

      setAppointments(allAppointments);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      fetchData(); // Fetch user all appointments when the component mounts
    }
  }, [token]);

  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};
