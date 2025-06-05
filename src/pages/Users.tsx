import React, { useState } from 'react';

const Users: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'subUsers' | 'customers'>(
    'subUsers'
  );
  const [subFilters, setSubFilters] = useState({
    image: '',
    name: '',
    email: '',
    isActive: '',
    itemsPerPage: 20,
  });
  const [customerFilters, setCustomerFilters] = useState({
    partner: '',
    subPartner: '',
    username: '',
    phoneCode: '',
    phoneNumber: '',
    email: '',
    itemsPerPage: 20,
  });

  const handleSubFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSubFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleCustomerFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCustomerFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubSearch = () => {
    console.log('Sub Users search filters:', subFilters);
  };

  const handleCustomerSearch = () => {
    console.log('Customers search filters:', customerFilters);
  };

  const handleSubCreate = () => {
    console.log('Creating new sub user...');
  };

  const handleCustomerExport = () => {
    console.log('Exporting customers...');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-lg min-h-screen px-4 mx-auto">
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('subUsers')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'subUsers'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
          } hover:bg-orange-600 dark:hover:bg-orange-500 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 transition-all duration-200`}
        >
          Sub Users
        </button>
        <button
          onClick={() => setActiveTab('customers')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'customers'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
          } hover:bg-orange-600 dark:hover:bg-orange-500 focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 transition-all duration-200`}
        >
          Customers
        </button>
      </div>

      {/* Sub Users Content */}
      {activeTab === 'subUsers' && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={subFilters.image}
                onChange={handleSubFilterChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200"
              />
            </div>
            {/* Name in English */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name in English
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={subFilters.name}
                onChange={handleSubFilterChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={subFilters.email}
                onChange={handleSubFilterChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200"
              />
            </div>
            {/* Is Active? */}
            <div>
              <label
                htmlFor="isActive"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Is Active?
              </label>
              <div className="relative">
                <select
                  id="isActive"
                  name="isActive"
                  value={subFilters.isActive}
                  onChange={handleSubFilterChange}
                  className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                    bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                    focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                    focus:border-orange-500 dark:focus:border-orange-400 
                    transition-all duration-200 appearance-none"
                >
                  <option value="">Filter</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end mb-6">
            <button
              onClick={handleSubCreate}
              className="px-6 py-2.5 bg-teal-500 text-white rounded-lg shadow-md 
                hover:bg-teal-600 focus:ring-2 focus:ring-teal-400 
                dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus:ring-teal-300 
                transition-all duration-200 text-sm sm:text-base"
            >
              Create
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <th className="p-2 sm:p-3 text-left">Image</th>
                  <th className="p-2 sm:p-3 text-left">Name in English</th>
                  <th className="p-2 sm:p-3 text-left">E-mail</th>
                  <th className="p-2 sm:p-3 text-left">Is Active?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
                  <td className="p-2 sm:p-3" colSpan="4">
                    No data found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Showing 0 of 0 items
            </div>
            <div className="flex items-center space-x-2">
              <select
                name="itemsPerPage"
                value={subFilters.itemsPerPage}
                onChange={handleSubFilterChange}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200 text-sm"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </>
      )}

      {/* Customers Content */}
      {activeTab === 'customers' && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Partner */}
            <div>
              <label
                htmlFor="partner"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Partner
              </label>
              <input
                type="text"
                id="partner"
                name="partner"
                value={customerFilters.partner}
                onChange={handleCustomerFilterChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200"
              />
            </div>
            {/* Sub Partner */}
            <div>
              <label
                htmlFor="subPartner"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Sub Partner
              </label>
              <input
                type="text"
                id="subPartner"
                name="subPartner"
                value={customerFilters.subPartner}
                onChange={handleCustomerFilterChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200"
              />
            </div>
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={customerFilters.username}
                onChange={handleCustomerFilterChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200"
              />
            </div>
            {/* Phone Code */}
            <div>
              <label
                htmlFor="phoneCode"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Phone Code
              </label>
              <input
                type="text"
                id="phoneCode"
                name="phoneCode"
                value={customerFilters.phoneCode}
                onChange={handleCustomerFilterChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={customerFilters.phoneNumber}
                onChange={handleCustomerFilterChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={customerFilters.email}
                onChange={handleCustomerFilterChange}
                className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex justify-end mb-6">
            <button
              onClick={handleCustomerExport}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md 
                hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 
                dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-300 
                transition-all duration-200 text-sm sm:text-base"
            >
              Export
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <th className="p-2 sm:p-3 text-left">Partner</th>
                  <th className="p-2 sm:p-3 text-left">Sub Partner</th>
                  <th className="p-2 sm:p-3 text-left">Username</th>
                  <th className="p-2 sm:p-3 text-left">Phone Code</th>
                  <th className="p-2 sm:p-3 text-left">Phone Number</th>
                  <th className="p-2 sm:p-3 text-left">E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
                  <td className="p-2 sm:p-3" colSpan="6">
                    No data found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Showing 20 of [object Object] items
            </div>
            <div className="flex items-center space-x-2">
              <select
                name="itemsPerPage"
                value={customerFilters.itemsPerPage}
                onChange={handleCustomerFilterChange}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                  focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                  focus:border-orange-500 dark:focus:border-orange-400 
                  transition-all duration-200 text-sm"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
