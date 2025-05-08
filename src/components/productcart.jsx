import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ product, onAddToCart }) => {
  // Determine rating color
  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 3.5) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.name}
        
        className="w-full h-48 object-contain mb-2 rounded"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-orange-600">{product.name}</h3>
        <p className="text-gray-700"><strong>Brand:</strong> {product.brand}</p>
        <p className="text-gray-600"><strong>Category:</strong> {product.category}</p>
        <p><strong>₹</strong>{product.price}</p>
        <p className={getRatingColor(product.rating)}><strong>Rating:</strong> ⭐ {product.rating}</p>
        <p className="text-sm text-gray-600 mb-2">{product.details}</p>
        <p className={+product.instock > 0 ? "text-green-600" : "text-red-600"}>
          {+product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
        </p>
      </div>
      <div className='flex justify-evenly'>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
      >
        Add to Cart
      </button>
        <Link to={`/product/${product._id}`} key={product._id}>
        <button  className=" mt-4 bg-teal-400 text-white py-2 px-4 rounded hover:bg-lime-700 transition duration-300">Detail</button></Link>
    </div>
    </div>
  );
};

export default ProductCard;
