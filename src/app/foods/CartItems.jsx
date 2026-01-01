'use client';
import { CartContext } from '@/context/CartProvider';
import React, { use } from 'react';

const CartItems = () => {
  const { cart } = use(CartContext);
  console.log(cart);
  return (
    <div>
      <h2>{cart.length} items Added</h2>

      <div className="p-5">
        {cart.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
