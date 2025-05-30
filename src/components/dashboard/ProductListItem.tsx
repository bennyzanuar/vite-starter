// src/components/dashboard/ProductListItem.tsx
import React from 'react';

interface ProductListItemProps {
  // imageUrl: string; // For later, once actual images are handled
  productName: string;
  unitsSold: number;
  changePercentage: string;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  productName,
  unitsSold,
  changePercentage,
}) => {
  const isPositive = changePercentage.startsWith('+');
  const percentageColor = isPositive ? 'text-green-600' : 'text-red-600'; // Improved contrast

  return (
    <div className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
      {/* Image Placeholder */}
      <div className="w-10 h-10 bg-gray-200 rounded-md mr-4 flex-shrink-0">
        {/* Future: <img src={imageUrl} alt={productName} className="w-full h-full object-cover rounded-md" /> */}
      </div>
      <div className="flex-grow">
        <p className="font-semibold text-gray-800 text-sm">{productName}</p>
        <p className="text-xs text-gray-500">{unitsSold} units</p>
      </div>
      <div className={`text-xs font-medium ml-2 flex-shrink-0 ${percentageColor}`}>
        {changePercentage}
      </div>
    </div>
  );
};

export default ProductListItem;
