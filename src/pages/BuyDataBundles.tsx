import React, { useState } from 'react';

const BuyDataBundles: React.FC = () => {
  const [formData, setFormData] = useState({
    country: '',
    operator: '',
    packageName: '',
    planName: '',
    msisdn: '',
    itemsPerPage: 20,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuy = () => {
    console.log('Buying bundle:', formData);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-lg px-4 min-h-screen mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6">
        Buy Data Bundles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Country
          </label>
          <div className="relative">
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200 appearance-none"
            >
              <option value="">Please Select</option>
              <option value="Egypt">Egypt</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
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

        {/* Operator */}
        <div>
          <label
            htmlFor="operator"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Operator
          </label>
          <div className="relative">
            <select
              id="operator"
              name="operator"
              value={formData.operator}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
                focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
                focus:border-orange-500 dark:focus:border-orange-400 
                transition-all duration-200 appearance-none"
            >
              <option value="">Please Select</option>
              <option value="Operator1">Operator 1</option>
              <option value="Operator2">Operator 2</option>
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
              value={formData.packageName}
              onChange={handleChange}
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
              value={formData.planName}
              onChange={handleChange}
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

        {/* MSISDN */}
        <div>
          <label
            htmlFor="msisdn"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Phone Number (MSISDN)
          </label>
          <input
            type="text"
            id="msisdn"
            name="msisdn"
            value={formData.msisdn}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
              bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 
              focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 
              focus:border-orange-500 dark:focus:border-orange-400 
              transition-all duration-200"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="p-2 sm:p-3 text-left">Country</th>
              <th className="p-2 sm:p-3 text-left">Operator</th>
              <th className="p-2 sm:p-3 text-left">Package Name</th>
              <th className="p-2 sm:p-3 text-left">Plan Name</th>
              <th className="p-2 sm:p-3 text-left">Price</th>
              <th className="p-2 sm:p-3 text-left">Data</th>
              <th className="p-2 sm:p-3 text-left">Validity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
              <td className="p-2 sm:p-3" colSpan={7}>
                No data found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buy Now Button and Footer */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleBuy}
          className="px-6 py-2.5 bg-orange-500 dark:bg-orange-600 text-white 
            rounded-lg shadow-md hover:bg-orange-600 dark:hover:bg-orange-500 
            focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 
            transition-all duration-200 text-sm sm:text-base"
        >
          Buy Now
        </button>
        <div className="flex items-center space-x-2">
          <select
            name="itemsPerPage"
            value={formData.itemsPerPage}
            onChange={handleChange}
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

export default BuyDataBundles;
