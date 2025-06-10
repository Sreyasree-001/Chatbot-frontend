import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      console.log(response.data);  
      alert('Login successful!');
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      navigate('/dashboard');  
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 sm:px-6 py-12 lg:py-6 lg:px-8">
        <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
           Log in
          </h2>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="email-id"
                  className="block w-full rounded-md bg-white px-1.5 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="password"
                  className="block w-full rounded-md bg-white p-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center cursor-pointer rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account?
            <a
              href="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500 underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;


