// src/components/dashboard/TopCountriesCard.tsx
import React from 'react';
import CountryListItem from './CountryListItem'; // Assuming CountryListItem is created

const countriesData = [
  { countryName: 'United States', flagPlaceholder: '[US]', percentage: 38.61, color: 'bg-blue-500' },
  { countryName: 'Brazil', flagPlaceholder: '[BR]', percentage: 32.79, color: 'bg-blue-500' },
  { countryName: 'India', flagPlaceholder: '[IN]', percentage: 24.42, color: 'bg-blue-500' },
  { countryName: 'United Kingdom', flagPlaceholder: '[UK]', percentage: 17.23, color: 'bg-blue-500' },
  // Add one more to make it 5 items if the design implies, or if there's a scroll. For now, 4 items.
  // { countryName: 'Germany', flagPlaceholder: '[DE]', percentage: 15.00, color: 'bg-blue-500' },
];

const TopCountriesCard: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-full hover:shadow-xl hover:bg-gray-50 transition-all duration-200 ease-in-out">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Countries</h2>
      
      {/* Map Placeholder */}
      <div className="bg-gray-200 rounded-md h-40 flex items-center justify-center text-gray-500 mb-5 text-sm">
        World Map Placeholder
        {/* UI Description: "Peta dunia dengan gelembung biru (#4B8FFB) berdasarkan volume penjualan." */}
        {/* This placeholder could be enhanced with a few blue circles if desired, e.g., absolutely positioned divs */}
      </div>
      
      <div className="space-y-1"> {/* space-y-1 might be too small if CountryListItem has py-2.5, check visual */}
        {countriesData.map((country) => (
          <CountryListItem
            key={country.countryName}
            countryName={country.countryName}
            flagPlaceholder={country.flagPlaceholder}
            percentage={country.percentage}
            progressBarColor={country.color}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCountriesCard;
