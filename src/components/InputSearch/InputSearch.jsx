'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;

    const newParams = new URLSearchParams(params.toString());
    newParams.set('search', value);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search foods"
          className="p-3 border-amber-400 border-2 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-amber-400 rounded ">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
