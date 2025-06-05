import React, { useState } from 'react';

const Reports: React.FC = () => {
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    partnerName: '',
    email: '',
    packageName: '',
    itemsPerPage: 20,
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log('Search filters:', filters);
  };

  const handleReset = () => {
    setFilters({
      fromDate: '',
      toDate: '',
      partnerName: '',
      email: '',
      packageName: '',
      itemsPerPage: 20,
    });
  };

  const handleExport = () => {
    console.log('Exporting report...');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-lg min-h-screen px-4 mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6">
        Partner Sales Report
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* From Date */}
        <div>
          <label
            htmlFor="fromDate"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            From Date
          </label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={filters.fromDate}
            onChange={handleFilterChange}
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
              bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
              focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
              focus:border-orange-500 dark:focus:border-orange-400 
              transition-all duration-200"
          />
        </div>

        {/* To Date */}
        <div>
          <label
            htmlFor="toDate"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            To Date
          </label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={filters.toDate}
            onChange={handleFilterChange}
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
              bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
              focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
              focus:border-orange-500 dark:focus:border-orange-400 
              transition-all duration-200"
          />
        </div>

        {/* Partner Name */}
        <div>
          <label
            htmlFor="partnerName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Partner Name
          </label>
          <div className="relative">
            <select
              id="partnerName"
              name="partnerName"
              value={filters.partnerName}
              onChange={handleFilterChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200 appearance-none"
            >
              <option value="">Search here</option>
              <option value="Partner1">Partner 1</option>
              <option value="Partner2">Partner 2</option>
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

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <select
              id="email"
              name="email"
              value={filters.email}
              onChange={handleFilterChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200 appearance-none"
            >
              <option value="">Please Select</option>
              <option value="user1@example.com">user1@example.com</option>
              <option value="user2@example.com">user2@example.com</option>
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
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md 
            hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 
            dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-300 
            transition-all duration-200 text-sm sm:text-base"
        >
          Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="p-2 sm:p-3 text-left">Partner Name</th>
              <th className="p-2 sm:p-3 text-left">Sub User</th>
              <th className="p-2 sm:p-3 text-left">Username</th>
              <th className="p-2 sm:p-3 text-left">Email</th>
              <th className="p-2 sm:p-3 text-left">Phone</th>
              <th className="p-2 sm:p-3 text-left">PaymentID</th>
              <th className="p-2 sm:p-3 text-left">TransactionID</th>
              <th className="p-2 sm:p-3 text-left">Purchased Date</th>
              <th className="p-2 sm:p-3 text-left">Type</th>
              <th className="p-2 sm:p-3 text-left">Result</th>
              <th className="p-2 sm:p-3 text-left">Package Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
              <td className="p-2 sm:p-3" colSpan="11">
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

export default Reports;
