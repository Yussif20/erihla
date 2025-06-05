import React from 'react';
import Sidebar from '../components/AppSidebar';
import Header from '../components/Header';

const SystemStatus: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">System Status</h2>
          <p className="text-gray-600 dark:text-gray-300">
            This is a placeholder for the System Status page.
            {/* Placeholder: Fetch system status from /api/status */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
