import { useState, useEffect } from 'react';
import { Search, Star } from 'lucide-react';
import Footer from './footer';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const WatchProductPage = () => {
  const [smartwatches, setSmartwatches] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItems, setAddedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const brands = ['Apple', 'Samsung', 'Noise', 'boAt'];
  const priceRanges = [
    { label: 'Under ₹5,000', min: 0, max: 4999 },
    { label: '₹5,000 - ₹20,000', min: 5000, max: 20000 },
    { label: 'Above ₹20,000', min: 20001, max: Infinity },
  ];

  useEffect(() => {
    const fetchSmartwatches = async () => {
      try {
          const response = await axios.get('https://techshop-backend-cwww.onrender.com/watches');
        setSmartwatches(response.data);
      } catch (err) {
        console.error('Error fetching smartwatches:', err);
        setError('Failed to load smartwatches.');
      } finally {
        setLoading(false);
      }
    };
    fetchSmartwatches();
  }, []);

  const addToCart = async (product) => {
    await axios.post('https://techshop-backend-cwww.onrender.com/api/cart', product);
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

  const filteredWatches = smartwatches.filter((watch) => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(watch.brand);
    const matchesSearch = watch.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = isPriceMatch(watch.price);
    return matchesBrand && matchesSearch && matchesPrice;
  });

  return (
    <section>
      <Navbar />
      <ProductNavbar />
      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* Filters */}
        <aside className="lg:w-1/4 bg-white p-4 rounded-xl shadow-md h-full md:sticky top-24 z-10">
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

        {/* Products */}
        <section className="lg:w-3/4 flex flex-col gap-4">
          <div className="flex items-center gap-2 bg-gray-300 p-2 rounded-md shadow-md">
            <Search className="text-gray-500" size={30} />
            <input
              type="text"
              placeholder="Search smartwatches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 col-span-full">{error}</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {filteredWatches.length > 0 ? (
                filteredWatches.map((watch) => (
                  <Link to={`/product/${watch._id}`} key={watch._id}>
                  <div
                    key={watch._id}
                    className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                  >
                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="w-full h-40 object-contain mb-4"
                    />
                    <h3 className="font-semibold text-lg">{watch.name}</h3>
                    <p className="p-2">{watch.details}</p>
                    <p className="text-gray-600 mb-2">
                      ₹{Number(watch.price).toLocaleString()}
                    </p>
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
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {addedItems.includes(watch.name) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                  </Link>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No smartwatches found.
                </p>
              )}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default WatchProductPage;
