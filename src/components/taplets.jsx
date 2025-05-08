import { useState} from 'react';
import { Star, Search } from 'lucide-react';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import Footer from './footer';
import axios from 'axios';
import { toast } from "react-toastify";
import Asus9 from '../assets/asustab1.jpg'
import Asus10 from '../assets/asustab2.jpg'
import Asus11 from '../assets/asustab3.jpg'
import Asus12 from '../assets/asustab2.jpg'
import Lenovo9 from '../assets/lenovotab1.jpg'
import Lenovo10 from '../assets/lenovotab2.jpg'
import Lenovo11 from '../assets/lenovotab3.jpg'
import Lenovo12 from '../assets/lenovotab4.jpg'
import Samsung1 from '../assets/samsungtab1.jpg'
import Samsung2 from '../assets/samsungtab2.jpg'
import Samsung3 from '../assets/samsungtab3.jpg'
import Samsung4 from '../assets/samsungtab2.jpg'
import Apple1 from '../assets/appletab4.jpg'
import Apple2 from '../assets/appletab2.jpg'
import Apple3 from '../assets/appletab3.jpg'
import Apple4 from '../assets/appletab4.jpg'



const tablets = [
   {
              id: 1,
              name: "Samsung Galaxy Tab S9",
              brand: "Samsung",
              category: "tablet",
              price: 72000,
              rating: 4.6,
              image: Samsung1,
              description: "Premium Android tablet with AMOLED display and S Pen support.",
              details: "11\" AMOLED, Snapdragon 8 Gen 2, 8GB RAM, 256GB, Android 13, 8400mAh battery",
              stock: 8,
              createdAt: new Date()
            },
            {
              id: 2,
              name: "Samsung Galaxy Tab A9+",
              brand: "Samsung",
              category: "tablet",
              price: 24000,
              rating: 4.3,
              image: Samsung2,
              description: "Budget-friendly entertainment tablet with large display.",
              details: "11\" LCD, Snapdragon 695, 4GB RAM, 64GB, Android 13, 7040mAh battery",
              stock: 12,
              createdAt: new Date()
            },
            {
              id: 3,
              name: "Samsung Galaxy Tab S6 Lite",
              brand: "Samsung",
              category: "tablet",
              price: 31000,
              rating: 4.2,
              image: Samsung3,
              description: "Mid-range tablet with S Pen support and slim design.",
              details: "10.4\" TFT, Exynos 9611, 4GB RAM, 64GB, Android 12, 7040mAh battery",
              stock: 10,
              createdAt: new Date()
            },
            {
              id: 4,
              name: "Samsung Galaxy Tab Active3",
              brand: "Samsung",
              category: "tablet",
              price: 45000,
              rating: 4.4,
              image: Samsung4,
              description: "Rugged tablet for tough environments with DeX support.",
              details: "8\" TFT, Exynos 9810, 4GB RAM, 64GB, Android 11, 5050mAh battery",
              stock: 6,
              createdAt: new Date()
            },
          
          
            {
              id: 5,
              name: "Apple iPad Pro 12.9",
              brand: "Apple",
              category: "tablet",
              price: 112000,
              rating: 4.9,
              image: Apple1,
              description: "High-end Apple tablet with Liquid Retina XDR and M2 chip.",
              details: "12.9\" Retina XDR, Apple M2, 8GB RAM, 256GB, iPadOS 17, 10758mAh battery",
              stock: 6,
              createdAt: new Date()
            },
            {
              id: 6,
              name: "Apple iPad (10th Gen)",
              brand: "Apple",
              category: "tablet",
              price: 47000,
              rating: 4.4,
              image: Apple2,
              description: "Colorful and powerful iPad for everyday use.",
              details: "10.9\" Liquid Retina, A14 Bionic, 4GB RAM, 64GB, iPadOS 17, 7606mAh battery",
              stock: 10,
              createdAt: new Date()
            },
            {
              id: 7,
              name: "Apple iPad Air (5th Gen)",
              brand: "Apple",
              category: "tablet",
              price: 67000,
              rating: 4.7,
              image: Apple3,
              description: "iPad Air with M1 chip, great for creators and multitasking.",
              details: "10.9\" Liquid Retina, Apple M1, 8GB RAM, 128GB, iPadOS 17, 7606mAh battery",
              stock: 5,
              createdAt: new Date()
            },
            {
              id: 8,
              name: "Apple iPad Mini (6th Gen)",
              brand: "Apple",
              category: "tablet",
              price: 59000,
              rating: 4.5,
              image: Apple4,
              description: "Compact powerhouse tablet with A15 Bionic chip.",
              details: "8.3\" Liquid Retina, A15 Bionic, 4GB RAM, 64GB, iPadOS 17, 5124mAh battery",
              stock: 7,
              createdAt: new Date()
            },
          
          
            {
              id: 9,
              name: "Lenovo Tab P12 Pro",
              brand: "Lenovo",
              category: "tablet",
              price: 59000,
              rating: 4.5,
              image: Lenovo9,
              description: "Lenovo flagship tablet with OLED screen and productivity mode.",
              details: "12.6\" OLED, Snapdragon 870, 8GB RAM, 256GB, Android 13, 10200mAh battery",
              stock: 7,
              createdAt: new Date()
            },
            {
              id: 10,
              name: "Lenovo Tab M10 Plus",
              brand: "Lenovo",
              category: "tablet",
              price: 19000,
              rating: 4.1,
              image: Lenovo10,
              description: "Affordable tablet for media and light work.",
              details: "10.6\" IPS, MediaTek G80, 4GB RAM, 64GB, Android 12, 7700mAh battery",
              stock: 14,
              createdAt: new Date()
            },
            {
              id: 11,
              name: "Lenovo Yoga Tab 11",
              brand: "Lenovo",
              category: "tablet",
              price: 27000,
              rating: 4.2,
              image: Lenovo11,
              description: "Yoga Tab with kickstand design and immersive sound.",
              details: "11\" IPS, MediaTek Helio G90T, 4GB RAM, 128GB, Android 11, 7500mAh battery",
              stock: 9,
              createdAt: new Date()
            },
            {
              id: 12,
              name: "Lenovo Tab P11 Gen 2",
              brand: "Lenovo",
              category: "tablet",
              price: 31000,
              rating: 4.3,
              image: Lenovo12,
              description: "Versatile family tablet with 2K display and pen support.",
              details: "11.5\" 2K IPS, MediaTek G99, 6GB RAM, 128GB, Android 12, 7700mAh battery",
              stock: 11,
              createdAt: new Date()
            },
          
          
            {
              id: 13,
              name: "Asus ROG Flow Z13",
              brand: "Asus",
              category: "tablet",
              price: 124000,
              rating: 4.7,
              image: Asus9,
              description: "Gaming tablet hybrid with high-performance Intel CPU.",
              details: "13.4\" FHD+ 120Hz, Intel Core i9, 16GB RAM, 1TB SSD, Windows 11, 56Wh battery",
              stock: 3,
              createdAt: new Date()
            },
            {
              id: 14,
              name: "Asus VivoTab Note 8",
              brand: "Asus",
              category: "tablet",
              price: 34000,
              rating: 4.0,
              image: Asus10,
              description: "Stylus-equipped Windows tablet great for note-taking.",
              details: "8\" IPS, Intel Atom Z3740, 2GB RAM, 64GB SSD, Windows 10, 3950mAh battery",
              stock: 9,
              createdAt: new Date()
            },
            {
              id: 15,
              name: "Asus ZenPad 10",
              brand: "Asus",
              category: "tablet",
              price: 22000,
              rating: 4.1,
              image: Asus11,
              description: "Balanced 10-inch Android tablet with stereo audio.",
              details: "10.1\" IPS, MediaTek MT8163, 2GB RAM, 32GB, Android 8, 4680mAh battery",
              stock: 13,
              createdAt: new Date()
            },
            {
              id: 16,
              name: "Asus Transformer Mini",
              brand: "Asus",
              category: "tablet",
              price: 38000,
              rating: 4.3,
              image: Asus12,
              description: "2-in-1 Windows tablet with detachable keyboard.",
              details: "10.1\" IPS, Intel Atom x5, 4GB RAM, 128GB SSD, Windows 10, 8000mAh battery",
              stock: 5,
              createdAt: new Date()
            },
]

const brands = ['Samsung', 'Apple', 'Lenovo', 'Asus'];

const priceRanges = [
  { label: 'Below ₹50,000', min: 0, max: 49999 },
  { label: '₹50,000 - ₹60,000', min: 50000, max: 60000 },
  { label: 'Above ₹60,000', min: 60001, max: Infinity },
];

const TabProductList = () => {
  
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItems, setAddedItems] = useState([]);



  const addToCart = async (product) => {
    try {
      await axios.post("https://techshop-backend-cwww.onrender.com/api/cart", product);
      setAddedItems((prev) => [...prev, product.name]);
      toast.success(`${product.name} added to cart successfully!`);
    } catch (error) {
      toast.error("Failed to add to cart.");
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

  const filteredTablets = tablets.filter((tablet) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(tablet.brand);
    const matchesSearch = tablet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = isPriceMatch(tablet.price);
    return matchesBrand && matchesSearch && matchesPrice;
  });

  return (
    <section>
      <Navbar />
      <ProductNavbar />

      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* Left - Filters */}
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
              placeholder="Search tablets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>

       
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {filteredTablets.length > 0 ? (
                filteredTablets.map((tablet) => (
                  
                  <div
                    key={tablet.id}
                    className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                  >
                    <img
                      src={tablet.image}
                      alt={tablet.name}
                      className="w-full h-40 object-contain mb-4"
                    />
                    <h3 className="font-semibold text-lg">{tablet.name}</h3>
                    <p className="text-gray-800 mb-2">{tablet.details}</p>
                    <p className="text-gray-600 mb-2">₹{tablet.price.toLocaleString()}</p>

                    <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < Math.round(tablet.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                      <span className="text-sm text-gray-500">({tablet.rating})</span>
                    </div>

                    <button
                      disabled={addedItems.includes(tablet.name)}
                      onClick={() => addToCart(tablet)}
                      className={`mt-2 px-4 py-1 rounded text-white ${
                        addedItems.includes(tablet.name)
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {addedItems.includes(tablet.name) ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                  
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">No tablets found.</p>
              )}
            </div>
          
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default TabProductList;

