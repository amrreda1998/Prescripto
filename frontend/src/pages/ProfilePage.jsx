import { useState } from "react";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "Amr Reda",
    email: "AmrReda@example.com",
    bio: "Healthcare enthusiast, loves fitness and wellness.",
    phone: "+123456789",
    address: "1234 Elm St, Springfield, USA",
    gender: "male",
    birthdate: "14-11-2024",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Update field values dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

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
        <h3 className="text-xl font-semibold text-[#5F6FFF]">Personal Details</h3>
        <div className="text-gray-700 space-y-3">
          {Object.keys(userData).map((field) => (
            <p key={field}>
              <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>{" "}
              {isEditing ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={userData[field]}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                />
              ) : (
                <span>{userData[field]}</span>
              )}
            </p>
          ))}
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="mt-8 text-center">
        <button
          className="bg-[#5F6FFF] text-white py-2 px-6 rounded-lg shadow hover:bg-[#4e58e0] transition-all"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
