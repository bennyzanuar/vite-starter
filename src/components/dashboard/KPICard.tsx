// src/components/dashboard/KPICard.tsx
import React from 'react';

interface KPICardProps {
  title: string;
  value: string;
  indicator: string; // e.g., "+3.4%" or "-2.8%"
  iconPlaceholder: React.ReactNode;
  iconBgColor: string; // e.g., 'bg-blue-100'
  iconColor: string; // e.g., 'text-blue-500'
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  indicator,
  iconPlaceholder,
  iconBgColor,
  iconColor,
}) => {
  const isPositive = indicator.startsWith('+');
  const indicatorValueColor = isPositive ? 'text-green-600' : 'text-red-600'; // Darkened for better contrast

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl hover:bg-gray-50 transition-all duration-200 ease-in-out flex-1 min-w-[280px]"> {/* Added hover:bg-gray-50 and transition-all */}
      {/* Icon Section */}
      <div className={`p-3 rounded-full ${iconBgColor} ${iconColor} w-12 h-12 flex items-center justify-center mb-4`}>
        {/* Icon itself should be sized appropriately by the SVG or font size if text icon */}
        {iconPlaceholder}
      </div>

      {/* Title */}
      <p className="text-sm text-gray-600 mb-1">{title}</p>

      {/* Value */}
      <p className="text-3xl font-bold text-gray-900 mb-3">{value}</p>

      {/* Indicator */}
      <div className="flex items-center text-xs">
        <span className={`flex items-center mr-1 ${indicatorValueColor}`}>
          {isPositive ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
          {indicator.substring(1)} {/* Display percentage, remove +/- */}
        </span>
        <span className="text-gray-500">from last month</span>
      </div>
    </div>
  );
};

export default KPICard;
