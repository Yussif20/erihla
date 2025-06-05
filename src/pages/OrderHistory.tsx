import React from 'react';

const OrderHistory: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg min-h-screen mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6">
        Orders
      </h2>
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-300 transition-all duration-200 text-sm sm:text-base">
          Export
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="p-2 sm:p-3 text-left">Partner Name</th>
              <th className="p-2 sm:p-3 text-left">Sub Partner</th>
              <th className="p-2 sm:p-3 text-left">Username</th>
              <th className="p-2 sm:p-3 text-left">Email</th>
              <th className="p-2 sm:p-3 text-left">Phone</th>
              <th className="p-2 sm:p-3 text-left">Package Name</th>
              <th className="p-2 sm:p-3 text-left">Plan Name</th>
              <th className="p-2 sm:p-3 text-left">Package Type</th>
              <th className="p-2 sm:p-3 text-left">Status</th>
              <th className="p-2 sm:p-3 text-left">Start Date</th>
              <th className="p-2 sm:p-3 text-left">End Date</th>
              <th className="p-2 sm:p-3 text-left">MSISDN</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
              <td className="p-2 sm:p-3" colSpan="12">
                No data found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4">
        Showing 0 of 0 items
      </div>
    </div>
  );
};

export default OrderHistory;
