import { motion } from "framer-motion";
import LAPTOP from '../assets/lenovo think bad.webp'
import HEADPHONE from '../assets/jblhp1.jpg'
import SMARTWATCH from '../assets/applewatch1.jpg'
import TABLET from '../assets/asustab1.jpg'
import COMPUTER from '../assets/delldesktop2.jpg'
import MONITER from '../assets/dellmonitor3.jpg'
import HEADPHONE2 from '../assets/boathp1.jpg'
import SMARTWATCH2 from '../assets/boatwatch2.jpg'
import { toast } from "react-toastify";
import axios from 'axios';
const products = [
  {
    id: 1,
    name: "Laptop|lenovo eade",
    image: LAPTOP,
    price: 41000,
    path:"/laptop"
  },
  {
    id: 2,
    name: "Headphone|JBL-ers",
    image: HEADPHONE,
    price: 2200,
     path:"/headphone"
  },
  {
    id: 3,
    name: "Smartwatch|Apple-332",
    image: SMARTWATCH,
    price: 4300,
     path:"/smartwatch"
  },
  {
    id: 4,
    name: "Computer|dell-bran",
    image: COMPUTER,
    price: 51200,
     path:"/desktop"
  },
  {
    id: 5,
    name: "Monitor|LG ulti",
    image: MONITER,
    price: 6400,
     path:"/monitor"
  },
  {
    id: 6,
    name: "Tablet|Domo nord",
    image: TABLET,
    price: 11500,
     path:"/tablet"
  },
  {
    id: 7,
    name: "Wire Headphone|Boat rockers",
    image: HEADPHONE2,
    price: 2250,
     path:"/headphone"
  },
  {
    id: 8,
    name: "Fitness Smartwatch|Boat 220GH",
    image: SMARTWATCH2,
    price: 6350,
     path:"/smartwatch"
  },
];

const ProductCard = ({ product }) => {
  const offerPrice = (product.price * 0.8).toFixed(2); // 20% off

  const addToCart = async (product) => {
        await axios.post("https://techshop-backend-cwww.onrender.com/api/cart", product);
  
          toast.success(`${product.name}  added to cart sucessfully!` );
      };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-4 relative overflow-hidden"
    >
      {/* Offer badge */}
      <motion.div 
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
      >
        24% OFF
      </motion.div>
     
      <img src={product.image} alt={product.name} className="h-44 object-cover rounded-lg" />
      <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
<p className="text-red-600 animate-pulse">Limted time deal</p>
      <div className="flex items-center space-x-2 mt-2">
        <p className="text-gray-500 line-through">₹{product.price}</p>
        <p className="text-green-600 font-bold">₹{offerPrice}</p>
        <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
      >
        Add to Cart
      </button>
      </div>
    </motion.div>
  );
};

const Dealscard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-10"> Today's Deals </h1>

      <div className="grid grid-cols-1 md:grid-ls-3 lg:grid-cols-4 gap-8 px-10 ">
      
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
      
    </div>
  );
};

export default Dealscard;

