// LoginPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { backendURL } from '../constants/backendURL.js';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useToken } from '../context/tokenContext.js';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { setToken } = useToken(); // token for authorization
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${backendURL}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const { message, data } = await response.json();

      if (response.ok) {
        toast.success(`Welcome ${data.userName}`);
        //store token into browser storage
        localStorage.setItem('userToken', data.token);
        //set the token to the userToken :
        setToken(data.token);
        setTimeout(() => navigate('/'), 700);
        // Redirect after success
      } else {
        toast.error(message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Failed to connect to the server. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
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

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#5F6FFF] text-white py-2 px-4 rounded-lg 
    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4e59d9]'}`}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          You do not have an account?
          <Link to="/signup" className="text-[#5F6FFF] hover:underline">
            {' '}
            Register here
          </Link>
        </p>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default LoginPage;
