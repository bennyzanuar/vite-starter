// src/components/dashboard/TopProductsCard.tsx
import React from 'react';
import ProductListItem from './ProductListItem'; // Assuming ProductListItem is in the same directory

const productsData = [
  { productName: 'Maneki Neko Poster', unitsSold: 1249, changePercentage: '+15.2%' },
  { productName: 'Echoes Necklace', unitsSold: 1145, changePercentage: '+13.9%' },
  { productName: 'Spiky Ring', unitsSold: 1073, changePercentage: '+5.2%' },
  { productName: 'Pastel Petals Poster', unitsSold: 1022, changePercentage: '+2.3%' },
  { productName: 'Il Limone', unitsSold: 992, changePercentage: '-0.7%' },
  { productName: 'Ringed Earring', unitsSold: 920, changePercentage: '-1.1%' },
];

const TopProductsCard: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-full hover:shadow-xl hover:bg-gray-50 transition-all duration-200 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Top Products</h2>
        <a href="#" className="text-sm text-blue-500 hover:text-blue-700 hover:underline">
          View all
        </a>
      </div>
      <div className="space-y-1"> {/* Adjust space if ProductListItem adds its own (e.g. border) */}
        {productsData.map((product, index) => (
          <ProductListItem
            key={index} // Using index as key for static list; prefer unique ID if available
            productName={product.productName}
            unitsSold={product.unitsSold}
            changePercentage={product.changePercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default TopProductsCard;
