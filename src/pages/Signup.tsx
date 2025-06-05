import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SignupForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupForm>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signup attempt with:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
