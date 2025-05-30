// src/components/dashboard/DashboardLayout.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header'; // Import the Header component

const DashboardLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#F5F6FA] text-black">
      <aside className="w-1/4 bg-[#F5F6FA] shadow-md fixed top-0 left-0 h-full overflow-y-auto">
        <Sidebar />
      </aside>

      <main className="flex-1 ml-[25%] p-6 overflow-y-auto">
        <Header /> {/* Use the Header component here */}
        
        {/* Content passed to the layout */}
        {children || (
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold">Main Content Placeholder</h3>
            <p>This is where page-specific content will go.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardLayout;
