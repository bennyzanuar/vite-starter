// src/components/dashboard/CountryListItem.tsx
import React from 'react';

interface CountryListItemProps {
  countryName: string;
  flagPlaceholder: React.ReactNode;
  percentage: number;
  progressBarColor?: string; // Optional, can default
}

const CountryListItem: React.FC<CountryListItemProps> = ({
  countryName,
  flagPlaceholder,
  percentage,
  progressBarColor = 'bg-blue-500', // Default to blue
}) => {
  return (
    <div className="flex items-center py-2.5">
      <div className="w-5 h-3 mr-3 flex items-center justify-center text-xs">{flagPlaceholder}</div>
      <div className="flex-grow mr-3">
        <p className="text-sm font-medium text-gray-700 truncate">{countryName}</p>
      </div>
      <div className="w-1/4 mr-3"> {/* Fixed width for percentage text consistency */}
        <p className="text-sm text-gray-800 font-semibold text-right">{percentage.toFixed(2)}%</p>
      </div>
      <div className="w-1/3 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div
          className={`${progressBarColor} h-1.5 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CountryListItem;
