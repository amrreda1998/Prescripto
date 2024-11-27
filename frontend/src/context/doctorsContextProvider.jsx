import DoctorsContext from './doctorsContext.js';
import { useState, useEffect } from 'react';
import { backendURL } from './../constants/backendURL';

// eslint-disable-next-line react/prop-types
export const DoctorsProvider = ({ children }) => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // Function to fetch doctors data from API
  const fetchData = async () => {
    try {
      const response = await fetch(`${backendURL}/api/doctors/`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Error fetching data from the server');
      }

      const { doctors } = await response.json();
      setAllDoctors(doctors);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  useEffect(() => {
    fetchData(); // Fetch user data when the component mount
  }, []);

  return (
    <DoctorsContext.Provider value={{ allDoctors, loading, setAllDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
};
