// RegistrationPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backendURL } from '../constants/backendURL';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('All fields are required.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${backendURL}/api/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Account created successfully! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000); // Redirect after success
      } else {
        toast.error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Failed to connect to the server. Please try again later.');
    }
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
          <button
            type="submit"
            className="w-full bg-[#5F6FFF] text-white py-2 px-4 rounded-lg hover:bg-[#4e59d9] transition duration-200 font-semibold"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-[#5F6FFF] hover:underline">
            Login here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
