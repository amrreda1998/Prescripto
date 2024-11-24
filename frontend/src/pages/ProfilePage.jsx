import { useState } from 'react';
import { backendURL } from './../constants/backendURL';
import { useToken } from './../context/tokenContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CameraIcon } from '@heroicons/react/24/outline'; // v2 icon import path
import { useUser } from '../context/userContext.js';

const ProfilePage = () => {
  const { userData, setUserData } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const { token } = useToken();

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

  // Function to handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a FormData object to send the file to the backend
      const formData = new FormData();
      formData.append('profileImage', file); // 'profileImage' is the field name expected by Multer

      try {
        const response = await fetch(
          `${backendURL}/api/user/upload-profile-image`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error('Failed to upload image');
        }

        const data = await response.json();

        // Update the user data with the new image URL returned from the backend
        setUserData((prevData) => ({
          ...prevData,
          image: data.imageUrl, // Cloudinary URL of the uploaded image
        }));

        toast.success('Profile image updated successfully');
      } catch (error) {
        console.error('Error uploading image:', error);
        toast.error('Failed to upload profile image');
      }
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

  return (
    <div className="p-8 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:p-10">
        <div className="relative">
          <div className="flex items-center justify-center w-32 h-32  rounded-full bg-[#5F6FFF] text-white text-6xl font-bold">
            {userData.image ? (
              <img
                src={userData.image}
                alt="Profile"
                className="w-32 h-36  object-cover rounded"
              />
            ) : (
              userData.name.charAt(0).toUpperCase()
            )}
          </div>
          {/* Camera icon to trigger image upload */}
          <label
            htmlFor="file-upload"
            className="absolute -bottom-2 right-0 p-2 bg-[#5F6FFF] rounded-full cursor-pointer"
          >
            <CameraIcon className="w-6 h-6 text-white" />
          </label>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
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
