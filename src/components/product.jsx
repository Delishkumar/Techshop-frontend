import React, { useEffect, useState } from 'react'; 
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import ProductCard from './productcart';
import { toast } from "react-toastify";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/login");
    });

    const getProducts = async () => {
      try {
        const res = await axios.get('https://techshop-backend-cwww.onrender.com/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();

    return () => unsubscribe(); 
  }, [navigate]);

  const addToCart = async (product) => {
    await axios.post("https://techshop-backend-cwww.onrender.com/api/cart", product);
    toast.success(`${product.name} added to cart successfully!`);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredProducts = products.filter((product) => {
    const name = product?.name || '';
    const brand = product?.brand || '';
    const category = product?.category || '';
    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

  return (
    <section>
      <Navbar />
      <ProductNavbar />
      <div className="p-4">
        <h2 className="text-3xl text-center font-bold text-orange-500 mb-4">All Products</h2>

        {/* 🔍 Search */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by name or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* 🌀 Loading */}
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-solid"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  onClick={() => handleProductClick(product._id)}
                  onAddToCart={addToCart}
                />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">No products found.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
