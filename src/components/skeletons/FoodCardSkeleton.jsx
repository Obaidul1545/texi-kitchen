import React from 'react';

export const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 w-full bg-gray-300"></div>

      {/* Content Skeleton */}
      <div className="p-4">
        <div className="mb-3">
          <div className="w-16 h-6 bg-gray-300 rounded-full"></div>
        </div>

        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>

        {/* Buttons Skeleton */}
        <div className="flex gap-2 mt-4">
          <div className="flex-1 h-10 bg-gray-300 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
