// src/components/dashboard/NavItem.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react'; // Import ChevronRight

interface NavItemProps {
  label: string;
  iconPlaceholder?: React.ReactNode; // Using ReactNode for flexibility
  isActive?: boolean;
  hasSubmenu?: boolean;
  isSubItem?: boolean; // For items under "Concepts" that might look like sub-items
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  iconPlaceholder,
  isActive = false,
  hasSubmenu = false,
  isSubItem = false, // This prop is not used in the current simplified version but kept for potential future use
}) => {
  const activeClasses = isActive ? 'bg-[#4B8FFB] text-white' : 'text-black hover:bg-gray-200'; 
  const subItemClasses = isSubItem ? 'pl-8' : 'pl-2.5'; // Adjust base padding and sub-item indentation. pl-2.5 for base, pl-8 for sub-items.

  // Note: The prompt used p-2.5 for the NavItem. If icons are present, a left padding (pl) might be better controlled
  // if the icon has fixed width and margin. The current approach pads the whole item.
  // The icon itself has mr-3. The overall item padding is p-2.5.
  // isSubItem might mean more padding for the whole item, or just for the text content part.
  // Let's assume isSubItem adds to the overall left padding of the item.
  // The provided code had `pl-4` for subItemClasses. Let's use that.

  const itemPadding = isSubItem ? 'p-2.5 pl-6' : 'p-2.5'; // Example: more left padding for subitems. Prompt used `pl-4` for subItemClasses.

  return (
    <div
      className={`flex items-center ${itemPadding} rounded-md cursor-pointer transition-colors duration-150 ${activeClasses}`}
      role="link" 
      tabIndex={0} 
    >
      {iconPlaceholder && <span className="mr-3 w-5 h-5 flex items-center justify-center">{iconPlaceholder}</span>}
      <span className="flex-1 text-sm font-medium">{label}</span>
      {hasSubmenu && <ChevronRight className="w-4 h-4 text-gray-500 ml-auto" />}
    </div>
  );
};

export default NavItem;
