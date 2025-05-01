import { useState } from 'react';
import { Search, Star } from 'lucide-react';
import Footer from './footer';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import WA1 from '../assets/applewatch1.jpg'
import WA2 from '../assets/applewatch2.jpg'
import WA3 from '../assets/applewatch3.jpg'
import WA4 from '../assets/applewatch4.jpg'
import WS1 from '../assets/samsungwatch1.jpg'
import WS2 from '../assets/samsungwatch2.jpg'
import WS3 from '../assets/samsungwatch3.jpg'
import WS4 from '../assets/samsungwatch4.jpg'
import WN1 from '../assets/noisewatch1.jpg'
import WN2 from '../assets/noisewatch2.jpg'
import WN3 from '../assets/noisewatch3.jpg'
import WN4 from '../assets/noisewatch4.jpg'

import WB2 from '../assets/boatwatch2.jpg'
import WB3 from '../assets/boatwatch3.jpg'
import WB4 from '../assets/boatwatch4.jpg'
import axios from 'axios';
import { toast } from "react-toastify";
const smartwatches = [
  {
    id: 1,
    name: 'Apple Watch Series 9',
    brand: 'Apple',
    price: 41900,
    rating: 4.9,
    image: WA1,
    details:"Fitness & Sleep Tracker, Crash dete"
  },
  {
    id: 2,
    name: 'Samsung Galaxy Watch 6',
    brand: 'Samsung',
    price: 31999,
    rating: 4.6,
    image: WS1,
    details:" Heart Rate Monitor, Retina Display,"
  },
  {
    id: 3,
    name: 'Noise ColorFit Pro 4',
    brand: 'Noise',
    price: 2999,
    rating: 4.2,
    image: WN1,
     details:"[GPS 44mm] Smartwatch with Midnight "
  },
  {
    id: 4,
    name: 'boAt Xtend Smartwatch',
    brand: 'boAt',
    price: 1999,
    rating: 4.1,
    image: WB3,
  details:"Bluetooth Calling Smart Watch, 10 Days"

  },
  {
    id: 5,
    name: 'Noise ColorFit Pro 4',
    brand: 'Noise',
    price: 2599,
    rating: 4.2,
    image: WN2,
     details:"Fitness & Sleep Tracker, Crash "
  },
  {
    id: 6,
    name: 'boAt Xtend',
    brand: 'boAt',
    price: 2999,
    rating: 4.1,
    image: WB2,
     details:"Bluetooth Calling Smart Watch, "
  },
  {
    id: 7,
    name: 'Apple Series 7',
    brand: 'Apple',
    price: 41800,
    rating: 4.9,
    image: WA2,
     details:" FHD Fitness & Sleep Tracker, "
  },
  {
    id: 8,
    name: 'Samsung Galaxy 8',
    brand: 'Samsung',
    price: 21999,
    rating: 4.6,
    image: WS2,
     details:"Fitness & Sleep Tracker, Crash "
  },
  {
    id: 9,
    name: 'Noise  Pro 2',
    brand: 'Noise',
    price: 2599,
    rating: 4.2,
    image: WA3,
     details:"Fitness & Sleep Tracker, Crash Detection"
  },
  {
    id: 10,
    name: 'boAt Xtend 5',
    brand: 'boAt',
    price: 3999,
    rating: 4.1,
    image: WS3,
     details:"Fitness & Sleep Tracker, Crash Detection"
  },
  {
    id: 11,
    name: 'Noise ColorFit',
    brand: 'Noise',
    price: 1589,
    rating: 4.2,
    image: WN3,
     details:" shm Fitness & Sleep Tracker, Crash Detection"
  },
  {
    id: 12,
    name: 'boAt rocer',
    brand: 'boAt',
    price: 3999,
    rating: 4.1,
    image: WB3,
     details:" v22 Fitness & Sleep Tracker, Crash Detection"
  },
  {
    id: 13,
    name: 'Apple Series',
    brand: 'Apple',
    price: 51900,
    rating: 4.9,
    image: WA4,
     details:"Fitness & Sleep Tracker, Crash Detection"
  },
  {
    id: 14,
    name: 'Samsung xtrem',
    brand: 'Samsung',
    price: 32999,
    rating: 4.6,
    image: WS4,
     details:"Fitness & Sleep Tracker, Crash Detection"
  },
  {
    id: 15,
    name: 'Noise Pro 4',
    brand: 'Noise',
    price: 2999,
    rating: 4.2,
    image: WN4,
     details:"Sleep Tracker, Crash Detection"
  },
  {
    id: 16,
    name: 'boAt Smartwatch',
    brand: 'boAt',
    price: 3999,
    rating: 4.1,
    image: WB4,
     details:"Bluerey & Sleep Tracker, Crash Detection"
  },
  
];

const brands = ['Apple', 'Samsung', 'Noise', 'boAt'];
const priceRanges = [
  { label: 'Under ₹5,000', min: 0, max: 4999 },
  { label: '₹5,000 - ₹20,000', min: 5000, max: 20000 },
  { label: 'Above ₹20,000', min: 20001, max: Infinity },
];

const WatchProductPage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const [addedItems, setAddedItems] = useState([]);

   const addToCart = async (product) => {
      await axios.post("https://techshop-backend-cwww.onrender.com/api/cart", product);
      
    
      setAddedItems((prev) => [...prev, product.name]);
        toast.success(`${product.name}  added to cart sucessfully!` );
    };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const togglePrice = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const isPriceMatch = (price) => {
    if (selectedPrices.length === 0) return true;
    return selectedPrices.some((label) => {
      const range = priceRanges.find((r) => r.label === label);
      return price >= range.min && price <= range.max;
    });
  };

  const filteredWatches = smartwatches.filter((watch) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(watch.brand);
    const matchesSearch = watch.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = isPriceMatch(watch.price);
    return matchesBrand && matchesSearch && matchesPrice;
  });


  return (
    <section>
        <Navbar/>
        <ProductNavbar/>
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left Filters */}
      <aside className="lg:w-1/4 bg-white p-4 rounded-xl shadow-md h-full  md:sticky top-24 z-10">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Brands</h3>
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="accent-blue-500"
              />
              {brand}
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-2">Price</h3>
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={selectedPrices.includes(range.label)}
                onChange={() => togglePrice(range.label)}
                className="accent-blue-500"
              />
              {range.label}
            </label>
          ))}
        </div>
      </aside>

      {/* Right Products */}
      <section className="lg:w-3/4 flex flex-col gap-4">
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-gray-300 p-2 rounded-md shadow-md ">
          <Search className="text-gray-500" size={30} />
          <input
            type="text"
            placeholder="Search smartwatches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none bg-transparent text-sm"
          />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {filteredWatches.length > 0 ? (
            filteredWatches.map((watch) => (
              <div
                key={watch.id}
                className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="font-semibold text-lg">{watch.name}</h3>
                <p>{watch.details}</p>
                <p className="text-gray-600 mb-2">₹{watch.price.toLocaleString()}</p>
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.round(watch.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <span className="text-sm text-gray-500">({watch.rating})</span>
                </div>
                <button
              disabled={addedItems.includes(watch.name)}
              onClick={() => addToCart(watch)}
              className={`mt-2 px-4 py-1 rounded text-white ${
                addedItems.includes(watch.name)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {addedItems.includes(watch.name) ? "Added" : "Add to Cart"}
            </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No smartwatches found.</p>
          )}
        </div>

      
      </section>
    </div>
    <Footer/>
    </section>
  );
};

export default WatchProductPage;
