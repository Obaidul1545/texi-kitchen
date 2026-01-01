'use client';
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const AddToCardBtn = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const handleAddToCard = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <div>
      <button
        onClick={handleAddToCard}
        disabled={inCart}
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl transition disabled:bg-gray-200 disabled:text-gray-600"
      >
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default AddToCardBtn;
