// LoginPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
            className="w-full bg-[#5F6FFF] text-white py-2 px-4 rounded-lg hover:bg-[#4e59d9] transition duration-200 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          You do not have an account?
          <Link to="/signup" className="text-[#5F6FFF] hover:underline">
            {" "}
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
