import React from 'react';

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-300" />
        <div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
          <div className="h-3 w-24 bg-gray-300 rounded" />
        </div>
      </div>

      <div className="h-4 w-24 bg-gray-300 rounded mb-3" />

      <div className="space-y-2 mb-4">
        <div className="h-3 bg-gray-300 rounded" />
        <div className="h-3 bg-gray-300 rounded" />
        <div className="h-3 w-2/3 bg-gray-300 rounded" />
      </div>

      <div className="h-8 w-20 bg-gray-300 rounded-xl" />
    </div>
  );
};

export default ReviewCardSkeleton;
