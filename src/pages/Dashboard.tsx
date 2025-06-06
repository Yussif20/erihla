import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 ">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-200 ">
          Welcome to Usim Partner Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
          Monitor your eSIMs, bundles, and activity at a glance.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card title="Bundles Sold (Last 30 Days)" value="0" />
        <Card title="Bundles Applied This Month" value="0" />
        <Card title="Total Produced eSIMs (All Time)" value="0" />
        <Card title="eSIMs Produced This Month" value="0" />
      </div>

      {/* Stat Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <StatBox title="Top Bundles Purchased By Country" />
        <StatBox
          title="Top Bundles Purchased by Region"
          summary="Total Purchased"
          value="0 Bundles"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
          Recent Activity
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <th className="p-2 sm:p-3 text-left">Action</th>
                <th className="p-2 sm:p-3 text-left">User</th>
                <th className="p-2 sm:p-3 text-left">Date</th>
                <th className="p-2 sm:p-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200">
                <td className="p-2 sm:p-3" colSpan={4}>
                  No recent activity found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 
      hover:shadow-lg transition-all duration-200 border-l-4 border-orange-500 dark:border-orange-400"
  >
    <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-200">
      {value}
    </div>
    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
      {title}
    </div>
  </div>
);

const StatBox: React.FC<{
  title: string;
  summary?: string;
  value?: string;
}> = ({ title, summary, value }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
      {title}
    </h2>
    {summary && value ? (
      <div className="text-center text-sm sm:text-base text-gray-500 dark:text-gray-400">
        <div>{summary}</div>
        <div className="font-semibold text-gray-900 dark:text-gray-200">
          {value}
        </div>
      </div>
    ) : (
      <div className="h-36 flex items-center justify-center text-gray-400 dark:text-gray-500">
        No data available
      </div>
    )}
  </div>
);

export default Dashboard;
