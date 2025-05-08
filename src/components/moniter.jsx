import {  useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Search, Star } from 'lucide-react';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import Footer from './footer';
import Samsung5 from '../assets/samsungmonitor1.jpg'
import Samsung6 from '../assets/samsungmonitor2.jpg'
import Samsung7 from '../assets/samsungmonitor3.jpg'
import Samsung8 from '../assets/samsungmoniter4.jpg'
import Dell9 from '../assets/dellmonitor1.jpg'
import Dell10 from '../assets/dellmonitor2.jpg'
import Dell11 from '../assets/dellmonitor3.jpg'
import Dell12 from '../assets/dellmonitor4.jpg'
import Acer1 from '../assets/acermonitor1.jpg'
import Acer2 from '../assets/acermonitor2.jpg'
import Acer3 from '../assets/acermonitor3.jpg'
import Acer4 from '../assets/acermonitor4.jpg'
import LG1 from '../assets/lgmonitor1.jpg'
import LG2 from '../assets/lgmonitor2.jpg'
import LG3 from '../assets/lgmonitor3.jpg'
import LG4 from '../assets/lgmonitor4.jpg'

const monitors = [
 {
            id: 1,
            name: "Samsung Smart Monitor M8",
            brand: "Samsung",
            category: "monitor",
            price: 51000,
            rating: 4.6,
            image: Samsung5,
            description: "Smart 4K UHD monitor with streaming apps and remote work features.",
            details: "32\" UHD 4K, VA Panel, 60Hz, HDR10+, USB-C, Smart TV features",
            stock: 7,
            createdAt: new Date()
          },
          {
            id: 2,
            name: "Samsung Odyssey G5",
            brand: "Samsung",
            category: "monitor",
            price: 34000,
            rating: 4.4,
            image: Samsung6,
            description: "Immersive curved gaming monitor with high refresh rate.",
            details: "27\" QHD, Curved 1000R, VA Panel, 144Hz, 1ms, AMD FreeSync",
            stock: 10,
            createdAt: new Date()
          },
          {
            id: 3,
            name: "Samsung T35F",
            brand: "Samsung",
            category: "monitor",
            price: 13500,
            rating: 4.2,
            image: Samsung7,
            description: "Affordable full HD monitor with minimal bezels.",
            details: "24\" FHD, IPS Panel, 75Hz, HDMI/VGA, Eye Saver Mode",
            stock: 15,
            createdAt: new Date()
          },
          {
            id: 4,
            name: "Samsung ViewFinity S65UA",
            brand: "Samsung",
            category: "monitor",
            price: 52000,
            rating: 4.5,
            image: Samsung8,
            description: "High-resolution ultra-wide monitor for multitasking and design work.",
            details: "34\" UWQHD, VA Panel, 100Hz, USB-C, HDR10, 1000R Curved",
            stock: 4,
            createdAt: new Date()
          },
        
          
          {
            id: 5,
            name: "LG UltraFine 5K",
            brand: "LG",
            category: "monitor",
            price: 125000,
            rating: 4.8,
            image: LG1,
            description: "Professional 5K monitor ideal for Mac and creative workflows.",
            details: "27\" 5K Retina, IPS Panel, Thunderbolt 3, DCI-P3 99%",
            stock: 3,
            createdAt: new Date()
          },
          {
            id: 6,
            name: "LG 32UN650-W",
            brand: "LG",
            category: "monitor",
            price: 48000,
            rating: 4.5,
            image: LG2,
            description: "Stunning 4K monitor with HDR support for vivid visuals.",
            details: "32\" UHD 4K, IPS Panel, HDR10, 60Hz, sRGB 95%",
            stock: 6,
            createdAt: new Date()
          },
          {
            id: 7,
            name: "LG UltraGear 27GN750",
            brand: "LG",
            category: "monitor",
            price: 29000,
            rating: 4.6,
            image: LG3,
            description: "Fast IPS gaming monitor with ultra-low input lag.",
            details: "27\" FHD, IPS Panel, 240Hz, 1ms, G-Sync Compatible",
            stock: 9,
            createdAt: new Date()
          },
          {
            id: 8,
            name: "LG 24MP400-B",
            brand: "LG",
            category: "monitor",
            price: 11000,
            rating: 4.2,
            image: LG4,
            description: "Compact full HD monitor with Flicker Safe and Reader Mode.",
            details: "24\" FHD, IPS Panel, 75Hz, HDMI/VGA, AMD FreeSync",
            stock: 13,
            createdAt: new Date()
          },
        
          
          {
            id: 9,
            name: "Acer Nitro VG270",
            brand: "Acer",
            category: "monitor",
            price: 17500,
            rating: 4.3,
            image: Acer1,
            description: "Vibrant IPS gaming monitor with rapid response.",
            details: "27\" FHD, IPS Panel, 165Hz, 1ms VRB, FreeSync",
            stock: 11,
            createdAt: new Date()
          },
          {
            id: 10,
            name: "Acer Predator X34",
            brand: "Acer",
            category: "monitor",
            price: 89000,
            rating: 4.7,
            image: Acer2,
            description: "UltraWide curved gaming monitor with immersive visuals.",
            details: "34\" UWQHD, IPS Panel, 180Hz, G-Sync, VESA DisplayHDR 400",
            stock: 4,
            createdAt: new Date()
          },
          {
            id: 11,
            name: "Acer KA242Y",
            brand: "Acer",
            category: "monitor",
            price: 9500,
            rating: 4.1,
            image: Acer3,
            description: "Affordable monitor with eye-care technology and great viewing angles.",
            details: "24\" FHD, IPS Panel, 75Hz, Blue Light Shield, VGA/HDMI",
            stock: 20,
            createdAt: new Date()
          },
          {
            id: 12,
            name: "Acer CB282K",
            brand: "Acer",
            category: "monitor",
            price: 30000,
            rating: 4.4,
            image: Acer4,
            description: "Professional-grade 4K UHD monitor with ergonomic stand.",
            details: "28\" UHD 4K, IPS Panel, HDR10, USB-C, 60Hz",
            stock: 5,
            createdAt: new Date()
          },
        
          
          {
            id: 13,
            name: "Dell U2723QE",
            brand: "Dell",
            category: "monitor",
            price: 68000,
            rating: 4.7,
            image: Dell9,
            description: "PremierColor 4K USB-C hub monitor with exceptional clarity.",
            details: "27\" UHD 4K, IPS Panel, USB-C Hub, 99% sRGB, DisplayHDR 400",
            stock: 6,
            createdAt: new Date()
          },
          {
            id: 14,
            name: "Dell P2422H",
            brand: "Dell",
            category: "monitor",
            price: 16500,
            rating: 4.3,
            image: Dell10,
            description: "Efficient monitor for workspaces with comfort features.",
            details: "24\" FHD, IPS Panel, ComfortView Plus, Height/Tilt Adjust",
            stock: 10,
            createdAt: new Date()
          },
          {
            id: 15,
            name: "Dell S2721DGF",
            brand: "Dell",
            category: "monitor",
            price: 47000,
            rating: 4.6,
            image: Dell11,
            description: "Fast QHD gaming monitor with wide color gamut and 165Hz refresh.",
            details: "27\" QHD, IPS Panel, 165Hz, 1ms, G-Sync & FreeSync Premium",
            stock: 5,
            createdAt: new Date()
          },
          {
            id: 16,
            name: "Dell SE2422HX",
            brand: "Dell",
            category: "monitor",
            price: 9000,
            rating: 4.0,
            image: Dell12,
            description: "Budget monitor for basic tasks with anti-glare coating.",
            details: "24\" FHD, VA Panel, 75Hz, HDMI/VGA, Anti-glare",
            stock: 18,
            createdAt: new Date()
          },

]

const brands = [ 'LG', 'Acer', 'Dell','Samsung'];

const priceRanges = [
  { label: 'Below ₹12000', min: 0, max: 12000 },
  { label: '₹12000 - ₹35000', min: 12500, max: 35000 },
  { label: 'Above ₹35000', min: 35001, max: Infinity },
];

const MonitorProductList = () => {

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


         
         {/* Product Grid */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
  {filteredMonitors.length > 0 ? (
    filteredMonitors.map((monitor) => (
      
        <div
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
      
    ))
  ) : (
    <p className="text-center col-span-full text-gray-500">No monitor found.</p>
  )}
</div>


        </section>
      </div>
      <Footer />
    </section>
  );
};

export default MonitorProductList;