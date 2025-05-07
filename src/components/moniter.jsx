import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import Footer from './footer';

const brands = ['Samsung', 'LG', 'Acer', 'Dell'];

const priceRanges = [
  { label: 'Below ₹5000', min: 0, max: 4999 },
  { label: '₹5000 - ₹8000', min: 5000, max: 8000 },
  { label: 'Above ₹8000', min: 8001, max: Infinity },
];

const MonitorProductList = () => {
  const [monitors, setMonitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItems, setAddedItems] = useState([]);


  // Fetch monitors from backend
  useEffect(() => {
    const fetchMonitors = async () => {
      try {
        const response = await axios.get("https://techshop-backend-cwww.onrender.com/monitors");
        setMonitors(response.data);
      } catch (err) {
        console.error("Error fetching monitors:", err);
        setError("Failed to load products.");
      } 
      finally {
        setLoading(false);
      }
    };
    fetchMonitors();
  }, []);


  const addToCart = async (product) => {
    try {
      await axios.post("https://techshop-backend-cwww.onrender.com/api/cart", product);
      setAddedItems((prev) => [...prev, product.name]);
      toast.success(`${product.name} added to cart successfully!`);
    } catch (error) {
      toast.error("Failed to add to cart. Please try again.");
      console.error("Add to cart error:", error);
    }
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

  const filteredMonitors = monitors.filter((monitor) => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(monitor.brand);
    const matchesSearch = monitor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = isPriceMatch(monitor.price);
    return matchesBrand && matchesSearch && matchesPrice;
  });

  return (
    <section>
      <Navbar />
      <ProductNavbar />

      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* Filters */}
        <aside className="lg:w-1/4 bg-white p-4 rounded-xl shadow-md h-full sticky top-24 z-10">
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

        {/* Products Section */}
        <section className="lg:w-3/4 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md shadow-md">
            <Search className="text-gray-500" size={30} />
            <input
              type="text"
              placeholder="Search monitors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>

          {/* Loading & Error */}
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) }
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {!loading && !error && filteredMonitors.length > 0 ? (
              filteredMonitors.map((monitor) => (
                <Link to={`/product/${monitor._id}`} key={monitor._id}>
                <div
                  key={monitor._id}
                  className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                >
                  <img
                    src={monitor.image}
                    alt={monitor.name}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-lg">{monitor.name}</h3>
                  <p className="text-gray-800 mb-2">{monitor.details}</p>
                  <p className="text-black mb-2">₹{monitor.price.toLocaleString()}</p>

                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.round(monitor.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="text-sm text-gray-500">({monitor.rating})</span>
                  </div>

                  <button
                    disabled={addedItems.includes(monitor.name)}
                    onClick={() => addToCart(monitor)}
                    className={`mt-2 px-4 py-1 rounded text-white ${
                      addedItems.includes(monitor.name)
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {addedItems.includes(monitor.name) ? "Added" : "Add to Cart"}
                  </button>
                </div>
                </Link>
              ))
            ) : (
              !loading && !error && (
                <p className="text-center col-span-full text-gray-500">No monitor found.</p>
              )
            )}
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default MonitorProductList;