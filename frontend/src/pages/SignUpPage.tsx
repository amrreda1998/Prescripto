// RegistrationPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F6FFF]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F6FFF]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F6FFF]"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F6FFF]"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-center mb-4 font-semibold">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#5F6FFF] text-white py-2 px-4 rounded-lg hover:bg-[#4e59d9] transition duration-200 font-semibold"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#5F6FFF] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
