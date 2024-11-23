import { useEffect, useState } from 'react';
import { backendURL } from './../constants/backendURL';
import { useToken } from './../context/tokenContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePage = () => {
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
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const { token } = useToken();

  // Function to fetch user data from API
  const fetchData = async () => {
    try {
      const response = await fetch(`${backendURL}/api/user/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching data from the server');
      }

      const { userInfo } = await response.json();
      setUserData(userInfo);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      toast.error(error.message || 'Failed to fetch user data');
    } finally {
      setIsLoading(false); // Stop loading after the request finishes
    }
  };

  useEffect(() => {
    fetchData(); // Fetch user data when the component mounts
  }, [token]);

  // Handle changes in the input fields dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle saving user info updates
  const handleSave = async () => {
    try {
      const response = await fetch(`${backendURL}/api/user/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Error saving user data');
      }

      const { userInfo, message } = await response.json();
      setUserData(userInfo); // Update the state with the updated data
      setIsEditing(false); // Exit the editing mode

      toast.success(message || 'Profile updated successfully!');
    } catch (error) {
      console.error('Error saving data:', error.message);
      toast.error(error.message || 'Failed to update profile');
    }
  };

  // Fields to display
  const fieldsToDisplay = [
    'name',
    'email',
    'bio',
    'gender',
    'address',
    'birthdate',
    'phone',
  ];

  // Loading UI component
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div> {/* Loading spinner */}
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:p-10">
        <div className="flex items-center justify-center w-32 h-32 rounded-full bg-[#5F6FFF] text-white text-6xl font-bold">
          {userData.name.charAt(0).toUpperCase()}
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">{userData.name}</h2>
          <p className="text-gray-600">{userData.bio}</p>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold text-[#5F6FFF]">
          Personal Details
        </h3>
        <div className="text-gray-700 space-y-3">
          {fieldsToDisplay.map((field) => (
            <div key={field} className="flex items-center gap-3">
              <p>
                <strong>{`${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }:  `}</strong>
                {isEditing ? (
                  field === 'gender' ? (
                    <select
                      name={field}
                      value={userData[field]}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                    >
                      <option value="Not Selected">Not Selected</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : field === 'birthdate' ? (
                    <input
                      type="date"
                      name={field}
                      value={userData[field]}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={userData[field]}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                      placeholder={`Enter your ${field}`}
                    />
                  )
                ) : (
                  <span>{userData[field]}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Edit/Save Button */}
      <div className="mt-8 text-center">
        <button
          className="bg-[#5F6FFF] text-white py-2 px-6 rounded-lg shadow hover:bg-[#4e58e0] transition-all"
          onClick={() => {
            if (isEditing) {
              handleSave();
            } else {
              setIsEditing(true); // Enable editing mode
            }
          }}
        >
          {isEditing ? 'Save' : 'Edit Profile'}
        </button>
      </div>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
