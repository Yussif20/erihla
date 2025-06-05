import React, { type JSX } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Building2,
  CirclePlus,
  ClipboardMinus,
  Code,
  CreditCard,
  House,
  ListOrdered,
  // MonitorCog,
  ServerCog,
  UsersRound,
  Wallet,
} from 'lucide-react';

interface MenuItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

const AppSidebar: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => {
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: <House />, label: 'Dashboard', path: '/dashboard' },
    {
      icon: <CirclePlus />,
      label: 'Buy Data Bundles',
      path: '/dashboard/bundles',
    },
    { icon: <CreditCard />, label: 'My eSIMs', path: '/dashboard/esims' },
    { icon: <UsersRound />, label: 'Users', path: '/dashboard/users' },
    { icon: <Building2 />, label: 'Company Info', path: '/dashboard/company' },
    { icon: <Wallet />, label: 'Wallet History', path: '/dashboard/wallet' },
    {
      icon: <ListOrdered />,
      label: 'Order History',
      path: '/dashboard/orders',
    },
    { icon: <ClipboardMinus />, label: 'Reports', path: '/dashboard/reports' },
    { icon: <ServerCog />, label: 'API Details', path: '/dashboard/api' },
    // { icon: <MonitorCog />, label: 'System Status', path: '/dashboard/status' },
    { icon: <Code />, label: 'Developers', path: '/dashboard/devs' },
  ];

  return (
    <div
      className={`sidebar bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200 
        shadow-lg h-full fixed top-20 transition-all duration-300 
        ${isCollapsed ? 'w-16 sm:w-20' : 'w-64 sm:w-72 lg:w-80'} 
        overflow-hidden z-10`}
    >
      <div className="flex-1">
        <div className={`p-3 sm:p-4 ${isCollapsed ? 'hidden' : ''}`}>
          <div
            className="bg-orange-100 dark:bg-gray-800 p-2.5 sm:p-3 rounded-lg shadow-sm 
              flex items-center justify-between mb-3"
          >
            <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm sm:text-base">
              Total Balance: 0 KWD
            </span>
            <NavLink
              to="/dashboard/wallet"
              className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-200"
            >
              <span className="text-lg sm:text-xl">+</span>
            </NavLink>
          </div>
        </div>

        <nav>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center p-3 sm:p-4 rounded-r-lg border-b border-gray-200 dark:border-gray-700 
                  transition-all duration-200 ${
                    isCollapsed ? 'justify-center p-2' : ''
                  } 
                  hover:bg-orange-100 dark:hover:bg-orange-800 hover:text-orange-600 dark:hover:text-orange-300
                  ${
                    isActive
                      ? 'bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300 font-semibold'
                      : ''
                  }`}
              >
                <span className="text-base sm:text-lg">{item.icon}</span>
                <span
                  className={`ml-2.5 text-xs sm:text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis ${
                    isCollapsed ? 'hidden w-0 opacity-0' : ''
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div
        className={`p-3 sm:p-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 ${
          isCollapsed ? 'hidden' : ''
        }`}
      >
        © USIM 2025
      </div>
    </div>
  );
};

export default AppSidebar;
