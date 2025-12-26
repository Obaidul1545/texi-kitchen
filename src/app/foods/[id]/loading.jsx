import React from 'react';

const loading = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="h-80 bg-gray-300 rounded-2xl" />

        <div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-6" />

          <div className="h-10 bg-gray-300 rounded-xl w-40 mb-4" />
          <div className="h-10 bg-gray-300 rounded-xl w-56" />
        </div>
      </div>
    </div>
  );
};

export default loading;
