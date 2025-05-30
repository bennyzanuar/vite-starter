// src/components/dashboard/Sidebar.tsx
// React default import removed
import NavItem from './NavItem';
import {
  Diamond, ShoppingCart, ClipboardList, Megaphone, BarChart2, Star, Folder,
  KanbanSquare, List, FileText, CheckSquare, AlertTriangle, Users, Box,
  ShoppingBag, UserCircle, HelpCircle, CalendarDays, Mail, MessageCircle
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const iconSize = "w-4 h-4"; // Common size for menu item icons (16px)

  return (
    <div className="h-full flex flex-col text-black">
      {/* Logo Section */}
      <div className="flex items-center justify-start p-4 border-b border-gray-300">
        <Diamond className="w-6 h-6 text-[#1E3A8A] mr-2" /> {/* Diamond icon for logo */}
        <span className="text-2xl font-bold text-black">Ecme</span>
      </div>

      {/* Navigation Section */}
      <nav className="mt-6 flex-1 px-4 space-y-1">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2.5">
          DASHBOARD
        </h3>
        <NavItem label="Ecommerce" iconPlaceholder={<ShoppingCart className={iconSize} />} isActive={true} />
        <NavItem label="Project" iconPlaceholder={<ClipboardList className={iconSize} />} />
        <NavItem label="Marketing" iconPlaceholder={<Megaphone className={iconSize} />} />
        <NavItem label="Analytic" iconPlaceholder={<BarChart2 className={iconSize} />} />

        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2 px-2.5">
          CONCEPTS
        </h3>
        <NavItem label="AI" iconPlaceholder={<Star className={iconSize} />} hasSubmenu={true} />
        <NavItem label="Projects" iconPlaceholder={<Folder className={iconSize} />} hasSubmenu={true} />
        <NavItem label="Scrum Board" iconPlaceholder={<KanbanSquare className={iconSize} />} hasSubmenu={true} />
        <NavItem label="List" iconPlaceholder={<List className={iconSize} />} hasSubmenu={true} />
        <NavItem label="Details" iconPlaceholder={<FileText className={iconSize} />} hasSubmenu={true} />
        <NavItem label="Tasks" iconPlaceholder={<CheckSquare className={iconSize} />} hasSubmenu={true} />
        <NavItem label="Issue" iconPlaceholder={<AlertTriangle className={iconSize} />} hasSubmenu={true} />

        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2 px-2.5">
          MORE
        </h3>
        <NavItem label="Customer" iconPlaceholder={<Users className={iconSize} />} />
        <NavItem label="Products" iconPlaceholder={<Box className={iconSize} />} />
        <NavItem label="Orders" iconPlaceholder={<ShoppingBag className={iconSize} />} />
        <NavItem label="Account" iconPlaceholder={<UserCircle className={iconSize} />} />
        <NavItem label="Help Center" iconPlaceholder={<HelpCircle className={iconSize} />} />
        <NavItem label="Calendar" iconPlaceholder={<CalendarDays className={iconSize} />} />
        <NavItem label="Mail" iconPlaceholder={<Mail className={iconSize} />} />
        <NavItem label="Chat" iconPlaceholder={<MessageCircle className={iconSize} />} />
      </nav>
    </div>
  );
};

export default Sidebar;
