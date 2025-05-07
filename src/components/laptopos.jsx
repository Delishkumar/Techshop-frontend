import { useState, useEffect } from 'react';
import { Star, Search } from 'lucide-react';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import Footer from './footer';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';


const brands = ['Dell', 'HP', 'Lenovo', 'Asus'];

const priceRanges = [
  { label: 'Below ₹50,000', min: 0, max: 49999 },
  { label: '₹50,000 - ₹60,000', min: 50000, max: 60000 },
  { label: 'Above ₹60,000', min: 60001, max: Infinity },
];

const LaptopProductList = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('https://techshop-backend-cwww.onrender.com/laptops');
        setLaptops(response.data);
      } catch (err) {
        console.error('Error fetching laptops:', err);
        setError('Failed to load laptops.');
      } finally {
        setLoading(false);
      }
    };
    fetchLaptops();
  }, []);

  const addToCart = async (product) => {
    await axios.post("https://techshop-backend-cwww.onrender.com/api/cart", product);
    setAddedItems((prev) => [...prev, product.name]);
    toast.success(`${product.name} added to cart successfully!`);
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

  const filteredLaptops = laptops.filter((laptop) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(laptop.brand);
    const matchesSearch = laptop.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = isPriceMatch(laptop.price);
    return matchesBrand && matchesSearch && matchesPrice;
  });

  return (
    <section>
      <Navbar />
      <ProductNavbar />

      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* Left - Filter Section */}
        <aside className="lg:w-1/4 bg-white p-4 rounded-xl shadow-md h-full md:sticky top-24 z-10">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Brands</h3>
            {brands.map((brand) => (
              <label key={brand} className="flex items-center space-x-2 mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="accent-blue-500"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-medium mb-2">Price</h3>
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center space-x-2 mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.label)}
                  onChange={() => togglePrice(range.label)}
                  className="accent-blue-500"
                />
                <span>{range.label}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Right - Products */}
        <section className="lg:w-3/4 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md shadow-md">
            <Search className="text-gray-500" size={30} />
            <input
              type="text"
              placeholder="Search laptops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>

          {/* Loading Spinner */}
          {loading ?(
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {filteredLaptops.length > 0 ? (
                filteredLaptops.map((laptop) => (
                  <Link to={`/product/${laptop._id}`} key={laptop._id}>
                  <div
                    key={laptop.id}
                    className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                  >
                    <img
                      src={laptop.image}
                      alt={laptop.name}
                      className="w-full h-40 object-contain mb-4"
                    />
                    <h3 className="font-semibold text-lg">{laptop.name}</h3>
                    <p className="text-gray-800 mb-2">{laptop.details}</p>
                    <p className="text-gray-800 mb-2">₹{laptop.price.toLocaleString()}</p>

                    <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < Math.round(laptop.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                      <span className="text-sm text-gray-500">({laptop.rating})</span>
                    </div>

                    <button
                      disabled={addedItems.includes(laptop.name)}
                      onClick={() => addToCart(laptop)}
                      className={`mt-2 px-4 py-1 rounded text-white ${
                        addedItems.includes(laptop.name)
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {addedItems.includes(laptop.name) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                  </Link>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">No laptops found.</p>
              )}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default LaptopProductList;

