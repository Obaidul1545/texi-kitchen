'use client';
import React, { useState } from 'react';

const AddToCardBtn = () => {
  const [inCart, setInCart] = useState(false);
  const handleAddToCard = () => {};
  return (
    <div>
      <button
        onClick={handleAddToCard}
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl transition"
      >
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default AddToCardBtn;
