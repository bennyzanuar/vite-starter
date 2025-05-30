// src/components/dashboard/SalesTargetCard.tsx
import React from 'react';

const SalesTargetCard: React.FC = () => {
  const percentage = 75; // Example percentage
  const strokeWidth = 10; // Thickness of the circle
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-full flex flex-col hover:shadow-xl hover:bg-gray-50 transition-all duration-200 ease-in-out">
      {/* Header: Title and Dropdown */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Sales Target</h2>
        <button
          className="flex items-center text-xs text-gray-600 border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
          title="Filter period"
        >
          <span>Monthly</span>
          <span className="ml-1.5 text-xs">▼</span>
        </button>
      </div>

      {/* Progress Circle and Text */}
      <div className="flex flex-col items-center justify-center flex-grow my-4"> {/* flex-grow to center content vertically */}
        <div className="relative w-36 h-36"> {/* Container for the circle */}
          <svg className="w-full h-full" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#F5F6FA" // Light gray for the empty part (Tailwind: bg-gray-100 or similar)
              strokeWidth={strokeWidth}
            />
            {/* Progress Circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#4B8FFB" // Blue for the progress part
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 60 60)" // Start from the top
            />
            {/* Text in the middle of the circle */}
            <text
              x="60"
              y="60"
              textAnchor="middle"
              dy=".3em" // Vertical alignment
              className="text-xl font-bold text-[#4B8FFB]" // Blue text
            >
              {`${percentage}%`}
            </text>
          </svg>
        </div>
        <p className="text-center text-sm text-gray-600 mt-3">
          <span className="font-semibold text-gray-800">1.3K</span> / 1.8K Units
        </p>
      </div>
    </div>
  );
};

export default SalesTargetCard;
