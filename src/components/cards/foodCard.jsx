import Link from 'next/link';
import React from 'react';

export const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <>
      <div className="w-full rounded-2xl shadow-lg p-4 border-2 border-amber-400">
        <img
          src={foodImg}
          alt={title}
          className="h-52 w-full object-cover rounded-xl mb-4"
        />

        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-lg font-bold mb-4">৳ {price}</p>

        <div className="flex gap-3">
          <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl transition">
            Add to Cart
          </button>
          <Link
            href={`/foods/${id}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-xl transition text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};
