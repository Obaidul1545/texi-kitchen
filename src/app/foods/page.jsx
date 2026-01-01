import { FoodCard } from '@/components/cards/foodCard';
import React from 'react';
import CartItems from './CartItems';
import InputSearch from '@/components/InputSearch/InputSearch';

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};

const FoodsPage = async ({ searchParams }) => {
  const { search = '' } = await searchParams;
  const foods = await getFoods(search);

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{foods.length}</span> Foods
        Found
      </h2>

      <div className="my-6">
        <InputSearch></InputSearch>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        <div className="w-62 border-2 border-amber-400 rounded-2xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
          <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
