// src/components/dashboard/ChannelRevenueCard.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface RevenueChannel {
  name: string; // Placeholder name for the channel
  percentage: number;
  color: string; // Tailwind CSS background color class e.g., 'bg-blue-500'
}

const revenueData: RevenueChannel[] = [
  { name: 'Direct', percentage: 40, color: 'bg-orange-500' }, // Original was 40% orange
  { name: 'Referral', percentage: 32, color: 'bg-green-500' }, // Original was 32% green
  { name: 'Organic Search', percentage: 28, color: 'bg-blue-500' }, // Original was 28% blue
];

const ChannelRevenueCard: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-full flex flex-col hover:shadow-xl hover:bg-gray-50 transition-all duration-200 ease-in-out">
      {/* Header: Title and Dropdown */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Channel Revenue</h2>
        <button
          className="flex items-center text-xs text-gray-600 border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
          title="Filter period"
        >
          <span>Monthly</span>
          <ChevronDown className="w-3 h-3 ml-1.5 text-gray-500" /> {/* Adjusted size for text-xs button */}
        </button>
      </div>

      {/* Growth Rate */}
      <div className="mb-5">
        <span className="text-sm text-gray-500 mr-1">Growth Rate:</span>
        <span className="text-sm font-bold text-green-500">3.4%</span>
      </div>

      {/* Horizontal Bars */}
      <div className="space-y-4 flex-grow"> {/* flex-grow to push this content down if card has extra space */}
        {revenueData.map((channel) => (
          <div key={channel.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-700">{channel.name}</span>
              <span className="text-sm font-medium text-gray-800">{channel.percentage}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2.5 w-full">
              <div
                className={`${channel.color} h-2.5 rounded-full`}
                style={{ width: `${channel.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelRevenueCard;
