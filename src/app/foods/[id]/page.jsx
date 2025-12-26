import React from 'react';

const singleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  return data.details || {};
};

const FoodDetailsPage = async ({ params }) => {
  const { id } = await params;

  const food = await singleFood(id);
  if (!food) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">Food Not Found</h2>
      </div>
    );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* image */}
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={foodImg}
            alt={title}
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-500 mb-1">Category: {category}</p>
          <p className="text-gray-500 mb-4">Area: {area}</p>

          <p className="text-2xl font-semibold mb-6">৳ {price}</p>

          <div className="flex gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl transition">
              Add to Cart
            </button>

            {video && (
              <a
                href={video}
                target="_blank"
                className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-xl transition text-black"
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
