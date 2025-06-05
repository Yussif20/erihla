import React, { useState } from 'react';

const MyESims: React.FC = () => {
  const [filters, setFilters] = useState({
    status: '',
    packageName: '',
    planName: '',
    itemsPerPage: 20,
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log('Search filters:', filters);
  };

  const handleReset = () => {
    setFilters({
      status: '',
      packageName: '',
      planName: '',
      itemsPerPage: 20,
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-lg px-4 min-h-screen mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6">
        My eSIMs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Status */}
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Status
          </label>
          <div className="relative">
            <select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200 appearance-none"
            >
              <option value="">Please Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Expired">Expired</option>
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

        {/* Package Name */}
        <div>
          <label
            htmlFor="packageName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Package Name
          </label>
          <div className="relative">
            <select
              id="packageName"
              name="packageName"
              value={filters.packageName}
              onChange={handleFilterChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200 appearance-none"
            >
              <option value="">Please Select</option>
              <option value="Package1">Package 1</option>
              <option value="Package2">Package 2</option>
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

        {/* Plan Name */}
        <div>
          <label
            htmlFor="planName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Plan Name
          </label>
          <div className="relative">
            <select
              id="planName"
              name="planName"
              value={filters.planName}
              onChange={handleFilterChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200 appearance-none"
            >
              <option value="">Please Select</option>
              <option value="Plan1">Plan 1</option>
              <option value="Plan2">Plan 2</option>
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

      {/* Buttons */}
      <div className="flex space-x-3 mb-6">
        <button
          onClick={handleSearch}
          className="px-6 py-2.5 bg-orange-500 dark:bg-orange-600 text-white 
            rounded-lg shadow-md hover:bg-orange-600 dark:hover:bg-orange-500 
            focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 
            transition-all duration-200 text-sm sm:text-base"
        >
          Search
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2.5 bg-gray-500 dark:bg-gray-600 text-white 
            rounded-lg shadow-md hover:bg-gray-600 dark:hover:bg-gray-500 
            focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-300 
            transition-all duration-200 text-sm sm:text-base"
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="p-2 sm:p-3 text-left">ICCID</th>
              <th className="p-2 sm:p-3 text-left">Status</th>
              <th className="p-2 sm:p-3 text-left">Package Name</th>
              <th className="p-2 sm:p-3 text-left">Plan Name</th>
              <th className="p-2 sm:p-3 text-left">Data Usage</th>
              <th className="p-2 sm:p-3 text-left">Start Date</th>
              <th className="p-2 sm:p-3 text-left">End Date</th>
              <th className="p-2 sm:p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
              <td className="p-2 sm:p-3" colSpan="8">
                No data found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Showing 0 of 0 items
        </div>
        <div className="flex items-center space-x-2">
          <select
            name="itemsPerPage"
            value={filters.itemsPerPage}
            onChange={handleFilterChange}
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
    </div>
  );
};

export default MyESims;
