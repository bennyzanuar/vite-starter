// src/components/dashboard/charts/LineChartCard.tsx
import React from 'react';

const LineChartCard: React.FC = () => {
  const xLabels = ['01 Jun', '02 Jun', '03 Jun', '04 Jun', '05 Jun', '06 Jun', '07 Jun', '08 Jun', '09 Jun', '10 Jun', '11 Jun', '12 Jun'];
  const yLabels = ['600', '500', '400', '300', '200'];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl hover:bg-gray-50 transition-all duration-200 ease-in-out">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Trend</h2>
      <div className="relative pl-8 pr-4"> {/* Added pl-8 for Y-axis labels, pr-4 for some right padding */}
        {/* Y-axis Labels */}
        <div className="absolute left-0 top-0 bottom-10 flex flex-col justify-between text-xs text-gray-500" style={{ height: 'calc(100% - 40px)' }}> {/* Adjusted height and bottom offset for X-axis space */}
          {yLabels.map(label => <span key={label} className="block h-full flex items-center">{label}</span>)} {/* Attempt to center labels vertically against potential grid lines */}
        </div>

        {/* Chart Placeholder */}
        <div className="bg-gray-100 h-72 rounded-lg flex items-center justify-center text-gray-500">
          Line Chart Placeholder
        </div>

        {/* X-axis Labels */}
        {/* Simplified X-axis to reduce visual clutter for placeholder */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{xLabels[0]}</span>
          <span>{xLabels[Math.floor(xLabels.length / 2)]}</span>
          <span>{xLabels[xLabels.length - 1]}</span>
        </div>
      </div>
    </div>
  );
};

export default LineChartCard;
