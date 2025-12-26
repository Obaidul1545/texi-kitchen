import React from 'react';
import Image from 'next/image';

export const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  const handleAddToCart = () => {
    console.log('Added to cart:', id);
    // এখানে আপনার cart লজিক যোগ করুন
  };

  const handleViewDetails = () => {
    console.log('View details:', id);
    // এখানে আপনার details পেজে নেভিগেশন যোগ করুন
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Food Image */}
      <div className="relative h-48 w-full">
        <Image
          src={foodImg}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-sm font-semibold text-gray-800">${price}</span>
        </div>
      </div>

      {/* Food Info */}
      <div className="p-4">
        <div className="mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
          >
            Add to Cart
          </button>
          <button
            onClick={handleViewDetails}
            className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
