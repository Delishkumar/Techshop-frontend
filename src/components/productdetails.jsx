import React, { useEffect, useState } from 'react';
import { useParams,useNavigate,} from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import { motion } from 'framer-motion';



const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState({ user: '', comment: '', rating: 0 });
const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://techshop-backend-cwww.onrender.com/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };
    fetchProduct();
  }, [id]);


  //review submit
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewWithDate = {
      ...review,
      date: new Date().toISOString(), 
    };
  
    try {
      const res = await axios.put(`https://techshop-backend-cwww.onrender.com/api/products/${id}`, reviewWithDate);
      setProduct(res.data.product); 
      setReview({ user: '', comment: '', rating: 0 }); 
       toast.success(" added to Review sucessfully!" );
    } catch (error) {
      console.error("Error adding review:", error);
      toast.success(" added to Review Fail!" );
    }
  };

  

  if (!product) return  <div className="flex justify-center items-center h-64">
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
</div>
;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow text-center">
      <img src={product.image} alt={product.name} className="w-full h-64 object-contain mb-4" />
      <h2 className="text-2xl font-bold text-orange-500">{product.name}</h2>
      <p className="text-gray-600"><strong>Brand:</strong> {product.brand}</p>
      <p className="text-gray-600"><strong>Category:</strong> {product.category}</p>
      <p className="text-green-600 font-semibold"><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
      <p className="text-gray-700"><strong>Details:</strong> {product.details}</p>
      <p className="text-gray-700"><strong>Description:</strong> {product.description}</p>
      <p className={+product.stock > 0 ? 'text-green-500' : 'text-red-500'}>
        {+product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
      </p>

      {/* 💬 Reviews Section */}
        <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews?.length ? (
            product.reviews.map((r, i) => (
              <motion.div
                key={i}
                className="p-4 bg-gray-100 rounded shadow"
                whileHover={{ scale: 1.02 }}
              >
                <p className="font-semibold">{r.user} <span className="text-yellow-500">⭐ {r.rating}</span></p>
                <p>{r.comment}</p>
                
              </motion.div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>

      {/* ➕ Add Review */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Add a Review</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={review.user}
          onChange={(e) => setReview({ ...review, user: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <textarea
          placeholder="Your Comment"
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="number"
          placeholder="Rating (1 to 5)"
          value={review.rating}
          onChange={(e) => setReview({ ...review, rating: parseFloat(e.target.value) })}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={handleReviewSubmit}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Submit Review
        </button>



      </div>

      <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        ⬅ Back
      </button>
    </div>
  );
};

export default ProductDetails;
