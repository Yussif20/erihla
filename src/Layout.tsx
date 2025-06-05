import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AppSidebar from './components/AppSidebar';

const Layout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      <AppSidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex-1 w-full">
        <Header
          onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
          isCollapsed={isSidebarCollapsed}
        />
        <main
          className={`pt-16 transition-all duration-300 
            ${
              isSidebarCollapsed ? 'pl-16 sm:pl-20' : 'pl-64 sm:pl-72 lg:pl-80'
            } 
            min-h-[calc(100vh-4rem)] mx-auto`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
