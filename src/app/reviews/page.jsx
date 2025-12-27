'use client';
import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewsLoading from './ReviewsLoading';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);

  if (loading) return <ReviewsLoading />;
  return (
    <div>
      <h3>All Reviews {reviews.length}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
