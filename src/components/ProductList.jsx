import React from 'react';
import { products } from '../data/data';

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-xl p-4 shadow-md">
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="mt-2 text-green-600 font-semibold">${product.price}</p>
          <div className="text-yellow-500">Rating: {product.rating.rate} ⭐ ({product.rating.count})</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
