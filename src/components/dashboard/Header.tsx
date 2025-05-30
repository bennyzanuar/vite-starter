// src/components/dashboard/Header.tsx
import React from 'react';
import { ChevronDown, Bell, UserCircle, Globe } from 'lucide-react'; // Import necessary icons

const Header: React.FC = () => {
  const iconButtonClass = "text-gray-600 hover:text-gray-800 p-1.5 rounded-full hover:bg-gray-100"; // Added p-1.5 and rounded-full for better click target and consistency
  const iconSize = "w-5 h-5"; // 20px, slightly larger than 16px for header icons if desired, or use w-4 h-4 for 16px

  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between mb-6 rounded-lg">
      {/* Left Side: Title */}
      <div>
        <h1 className="text-2xl font-bold text-black">Overview</h1>
      </div>

      {/* Right Side: Controls and User Info */}
      <div className="flex items-center space-x-2 md:space-x-4"> {/* Adjusted spacing for responsiveness */}
        {/* Monthly Dropdown Placeholder */}
        <button 
          className="flex items-center text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          title="Filter by period"
        >
          <span>Monthly</span>
          <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
        </button>

        {/* Language Icon Placeholder (using Globe as US flag is not in lucide) */}
        <button className={iconButtonClass} title="Select Language">
          <Globe className={iconSize} /> 
        </button>

        {/* Notification Icon Placeholder */}
        <button className={`relative ${iconButtonClass}`} title="Notifications">
          <Bell className={iconSize} />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-1 ring-white" /> {/* Adjusted ring and position for smaller icon */}
        </button>

        {/* User Avatar Placeholder */}
        <button className="p-1 rounded-full hover:bg-gray-100 focus:outline-none" title="User Profile"> {/* Added padding, rounded-full and hover:bg-gray-100 */}
          {/* Using UserCircle icon, or could be an img tag for actual avatar */}
          <UserCircle className="w-8 h-8 text-gray-400 group-hover:text-gray-500" /> {/* group-hover can be used if button is group */}
          {/* Fallback if UserCircle isn't desired & original div preferred:
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-600 overflow-hidden">
            AV
          </div>
          */}
        </button>
      </div>
    </header>
  );
};

export default Header;
