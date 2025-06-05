import React from 'react';
import { User, Book, Briefcase, Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC<{
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}> = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-gray-50 dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center p-3 sm:p-4 lg:p-5 mx-auto">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-800"
            title={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-600 dark:text-orange-300">
            Erihla
          </h1>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          <a
            href="/dashboard/account-manager"
            className="flex items-center p-2 text-gray-800 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-300 rounded-lg transition-all duration-200 text-sm sm:text-base"
          >
            <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline font-medium">
              Account Manager
            </span>
          </a>
          <a
            href="/dashboard/tutorial"
            className="flex items-center p-2 text-gray-800 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-300 rounded-lg transition-all duration-200 text-sm sm:text-base"
          >
            <Book className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline font-medium">Tutorial</span>
          </a>
          <a
            href="/dashboard/profile"
            className="flex items-center p-2 text-gray-800 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-300 rounded-lg transition-all duration-200 text-sm sm:text-base"
          >
            <User className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline font-medium">Profile</span>
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
