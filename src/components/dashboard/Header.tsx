// src/components/dashboard/Header.tsx
// React default import removed
import { ChevronDown, Bell, UserCircle, Globe, Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const iconButtonClass = "text-gray-600 hover:text-gray-800 p-1.5 rounded-full hover:bg-gray-100";
  const iconSize = "w-5 h-5";

  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between mb-6 rounded-lg">
      {/* Left Side: Burger Menu (mobile) and Title */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-600 hover:text-gray-800 mr-4 focus:outline-none"
          aria-label="Toggle sidebar navigation" // More descriptive aria-label
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-black">Overview</h1>
      </div>

      {/* Right Side: Controls and User Info */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Monthly Dropdown Placeholder - Has text, so title is fine for tooltip, aria-label not strictly needed */}
        <button
          className="flex items-center text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          title="Filter by period"
        >
          <span>Monthly</span>
          <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
        </button>

        {/* Language Icon Placeholder (using Globe as US flag is not in lucide) */}
        <button className={iconButtonClass} title="Select Language" aria-label="Select language">
          <Globe className={iconSize} />
        </button>

        {/* Notification Icon Placeholder */}
        <button className={`relative ${iconButtonClass}`} title="Notifications" aria-label="View notifications">
          <Bell className={iconSize} />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-1 ring-white" />
        </button>

        {/* User Avatar Placeholder */}
        <button className="p-1 rounded-full hover:bg-gray-100 focus:outline-none" title="User Profile" aria-label="User profile options">
          <UserCircle className="w-8 h-8 text-gray-400 hover:text-gray-500" /> {/* Removed group-hover, direct hover on icon */}
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
