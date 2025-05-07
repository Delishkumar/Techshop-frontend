import { useState, useEffect } from 'react';
import { Search, Star } from 'lucide-react';
import ProductNavbar from './productNavbar';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const HeadphoneProductPage = () => {
  const [headphones, setHeadphones] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchHeadphones = async () => {
      try {
        const response = await axios.get('https://techshop-backend-cwww.onrender.com/headphones');
        setHeadphones(response.data);
      } catch (err) {
        console.error("Error fetching headphones:", err);
        toast.error("Failed to load headphone products.");
      } finally {
        setLoading(false);
      }
    };
    fetchHeadphones();
  }, []);

  const brands = ['sony', 'oneplus', 'jbl', 'boat'];
  const priceRanges = [
    { label: 'Under ₹5,000', min: 0, max: 4999 },
    { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
    { label: 'Above ₹10,000', min: 10001, max: Infinity },
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItems, setAddedItems] = useState([]);

  const addToCart = async (product) => {
    try {
      await axios.post('https://techshop-backend-cwww.onrender.com/api/cart', product);
      setAddedItems((prev) => [...prev, product.name]);
      toast.success(`${product.name} added to cart successfully!`);
    } catch (err) {
      toast.error("Failed to add item to cart.");
    }
  };

  const toggleBrand = (brand) => {
    const lower = brand.toLowerCase();
    setSelectedBrands((prev) =>
      prev.includes(lower) ? prev.filter((b) => b !== lower) : [...prev, lower]
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

  const filteredHeadphones = headphones.filter((product) => {
    const brand = product.brand?.toLowerCase() || '';
    const price = Number(product.price) || 0;

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(brand);

    const matchesSearch =
      product.name &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice = isPriceMatch(price);

    return matchesBrand && matchesSearch && matchesPrice;
  });

  return (
    <section>
      <Navbar />
      <ProductNavbar />

      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* Left Filters */}
        <aside className="lg:w-1/4 bg-white p-4 rounded-xl shadow-md h-full md:sticky top-24 z-10">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Brands</h3>
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 mb-2 capitalize">
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
          <div className="flex items-center gap-2 bg-slate-200 p-2 rounded-md shadow-md">
            <Search className="text-gray-500" size={30} />
            <input
              type="text"
              placeholder="Search headphones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {filteredHeadphones.length > 0 ? (
                filteredHeadphones.map((product) => (
                  <Link to={`/product/${product._id}`} key={product._id}>
                    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-contain mb-4"
                      />
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{product.details}</p>
                      <p className="text-gray-800 font-semibold mb-2">
                        ₹{Number(product.price).toLocaleString()}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill={i < Math.round(product.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                        <span className="text-sm text-gray-500">({product.rating})</span>
                      </div>
                      <button
                        disabled={addedItems.includes(product.name)}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent link navigation when clicking button
                          addToCart(product);
                        }}
                        className={`mt-2 px-4 py-1 rounded text-white ${
                          addedItems.includes(product.name)
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700'
                        }`}
                      >
                        {addedItems.includes(product.name) ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No headphones found.
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

export default HeadphoneProductPage;

