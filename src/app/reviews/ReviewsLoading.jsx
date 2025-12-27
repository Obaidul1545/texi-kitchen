import ReviewCardSkeleton from '@/components/skeletons/ReviewCardSkeleton ';
import React from 'react';

const ReviewsLoading = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(12)].map((_, i) => (
          <ReviewCardSkeleton key={i}></ReviewCardSkeleton>
        ))}
      </div>
    </div>
  );
};

export default ReviewsLoading;
