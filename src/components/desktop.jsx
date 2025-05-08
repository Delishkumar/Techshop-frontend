import { useState,} from 'react';
import { Star, Search } from 'lucide-react';
import Navbar from "./navbar";
import ProductNavbar from './productNavbar';
import Footer from './footer';
import axios from 'axios';
import { toast } from "react-toastify";
import Dell1 from '../assets/delldesktop2.jpg'
import Dell2 from '../assets/dell desktop3.jpg'
import Dell3 from '../assets/delldesktop4.jpg'
import Dell4 from '../assets/delldesktop2.jpg'
import HP1 from '../assets/hpdesktop1.jpg'
import HP2 from '../assets/hpdesktop2.jpg'
import HP3 from '../assets/hpdesktop3.jpg'
import HP4 from '../assets/hpdesktop4.jpg'
import Lenovo1 from '../assets/lenovodesktop1.jpg'
import Lenovo2 from '../assets/lenovodesktop2.jpg'
import Lenovo3 from '../assets/lenovodesktop3.jpg'
import Lenovo4 from '../assets/lenovodesktop4.jpg'
import Asus1 from '../assets/asusdesktop1.jpg'
import Asus2 from '../assets/asusdesktop2.jpg'
import Asus3 from '../assets/asusdesktop3.jpg'
import Asus4 from '../assets/asusdesktop4.jpg'

const desktops = [
      {
            id: 1,
            name: "Dell OptiPlex 3080",
            brand: "Dell",
            category: "desktop",
            price: 48000,
            rating: 4.2,
            image: Dell1,
            description: "Business-class Dell desktop with solid performance and security features.",
            details: "Intel i5-10400, 8GB DDR4, 1TB HDD, Intel UHD 630, 4x USB 3.2, HDMI, Win 11 Pro",
            stock: 8,
            createdAt: new Date()
          }, 
          {
              id: 2,
              name: "Asus ExpertCenter D7",
              brand: "Asus",
              category: "desktop",
              price: 56000,
              rating: 4.3,
              image: Asus3,
              description: "Business-focused desktop with quiet cooling and durability.",
              details: "Intel i7-11700, 16GB RAM, 1TB HDD + 256GB SSD, DP + HDMI + VGA, Win 11 Pro",
              stock: 6,
              createdAt: new Date()
            },
          {
            id: 3,
            name: "HP Pavilion TP01",
            brand: "HP",
            category: "desktop",
            price: 47000,
            rating: 4.1,
            image: HP1,
            description: "Stylish HP Pavilion desktop for home entertainment.",
            details: "AMD Ryzen 5 5600G, 8GB RAM, 512GB SSD, Radeon Graphics, 4x USB-A, HDMI, Win 11",
            stock: 7,
            createdAt: new Date()
          },
          {
              id: 4,
              name: "Dell Inspiron Tower 3910",
              brand: "Dell",
              category: "desktop",
              price: 52000,
              rating: 4.3,
              image: Dell2,
              description: "Powerful Inspiron tower for everyday use and multitasking.",
              details: "Intel i7-12700, 16GB DDR4, 512GB SSD, Intel UHD 770, Wi-Fi 6, BT 5.2, Win 11",
              stock: 5,
              createdAt: new Date()
            },
          {
            id: 5,
            name: "HP EliteDesk 800 G6",
            brand: "HP",
            category: "desktop",
            price: 75000,
            rating: 4.5,
            image: HP2,
            description: "Reliable enterprise desktop with advanced security.",
            details: "Intel i7-10700, 16GB DDR4, 512GB NVMe SSD, Intel UHD 630, DP + VGA, Win 11 Pro",
            stock: 4,
            createdAt: new Date()
          },
          {
            id: 6,
            name: "HP Omen 25L Gaming",
            brand: "HP",
            category: "desktop",
            price: 88000,
            rating: 4.7,
            image: HP3,
            description: "High-performance gaming desktop with aggressive cooling.",
            details: "AMD Ryzen 7 5700G, 16GB DDR4, 1TB SSD, RTX 3060 Ti, RGB case, Win 11",
            stock: 3,
            createdAt: new Date()
          },
         
        
          {
              id: 7,
              name: "Asus ROG Strix G10DK",
              brand: "Asus",
              category: "desktop",
              price: 88000,
              rating: 4.6,
              image: Asus2,
              description: "Performance gaming desktop with immersive features.",
              details: "Ryzen 7 3700X, 16GB RAM, 1TB SSD, GTX 1660 Ti, Aura Sync RGB, Win 11",
              stock: 5,
              createdAt: new Date()
            },
          {
            id: 8,
            name: "Lenovo IdeaCentre 3",
            brand: "Lenovo",
            category: "desktop",
            price: 39000,
            rating: 4.0,
            image: Lenovo1,
            description: "Efficient home desktop for multitasking and browsing.",
            details: "AMD Ryzen 3 3250U, 8GB RAM, 256GB SSD, Radeon Vega 3, USB-C, HDMI, Win 11",
            stock: 12,
            createdAt: new Date()
          },
          {
              id: 9,
              name: "HP ProDesk 400 G7",
              brand: "HP",
              category: "desktop",
              price: 42000,
              rating: 4.0,
              image: HP4,
              description: "Professional desktop with essential features for productivity.",
              details: "Intel i5-10500, 8GB RAM, 1TB HDD, DVD-RW, 6x USB, Win 11",
              stock: 9,
              createdAt: new Date()
            },
          {
              id: 10,
              name: "Dell Vostro Small Form",
              brand: "Dell",
              category: "desktop",
              price: 41000,
              rating: 4.0,
              image: Dell3,
              description: "Compact desktop ideal for small workspaces.",
              details: "Intel i3-12100, 8GB DDR4, 256GB SSD, 2x USB 3.0, Ethernet, VGA, Win 11",
              stock: 10,
              createdAt: new Date()
            },
          {
            id: 11,
            name: "Lenovo Legion T5",
            brand: "Lenovo",
            category: "desktop",
            price: 94000,
            rating: 4.6,
            image: Lenovo2,
            description: "Gaming desktop with bold design and powerful specs.",
            details: "Intel i7-12700F, 16GB RAM, 1TB SSD, RTX 3070, RGB Case, Wi-Fi 6, Win 11",
            stock: 4,
            createdAt: new Date()
          },
          {
            id: 12,
            name: "Lenovo ThinkCentre M70t",
            brand: "Lenovo",
            category: "desktop",
            price: 51000,
            rating: 4.3,
            image: Lenovo3,
            description: "Enterprise desktop with remote management and expansion.",
            details: "Intel i5-10500T, 8GB DDR4, 500GB HDD, Intel UHD, VGA/DP, Win 11 Pro",
            stock: 6,
            createdAt: new Date()
          },
          {
            id: 13,
            name: "Lenovo Yoga AIO 7",
            brand: "Lenovo",
            category: "desktop",
            price: 99000,
            rating: 4.7,
            image: Lenovo4,
            description: "Sleek AIO with 4K display and rotating screen for creators.",
            details: "Ryzen 7 5800H, 16GB RAM, 1TB SSD, 27\" 4K UHD Touch, AMD Radeon RX 6600M, Win 11",
            stock: 2,
            createdAt: new Date()
          },
        
          
          {
            id: 14,
            name: "Asus S500SA",
            brand: "Asus",
            category: "desktop",
            price: 46000,
            rating: 4.2,
            image: Asus1,
            description: "Compact and efficient desktop for everyday use.",
            details: "Intel i5-11400, 8GB DDR4, 512GB SSD, Intel UHD Graphics 730, USB-C, Win 11",
            stock: 7,
            createdAt: new Date()
          },
          {
              id: 15,
              name: "Dell XPS Desktop 8940",
              brand: "Dell",
              category: "desktop",
              price: 96000,
              rating: 4.6,
              image: Dell4,
              description: "Premium desktop with advanced cooling and high-end performance.",
              details: "Intel i7-11700K, 32GB DDR4, 1TB NVMe SSD, RTX 3060, Wi-Fi 6, Win 11 Home",
              stock: 2,
              createdAt: new Date()
            },
       
       
            {
              id: 16,
              name: "Asus Vivo AIO V241",
              brand: "Asus",
              category: "desktop",
              price: 72000,
              rating: 4.5,
              image: Asus4,
              description: "Elegant all-in-one desktop with FHD display and compact design.",
              details: "Intel i5-1135G7, 8GB RAM, 512GB SSD, 23.8\" FHD IPS, Wi-Fi, Bluetooth, Win 11",
              stock: 4,
              createdAt: new Date()
            },
  
]


const DesktopProductList = () => {
 
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItems, setAddedItems] = useState([]);

  const brands = ['dell', 'hp', 'lenovo', 'asus'];
  const priceRanges = [
    { label: 'Below ₹50,000', min: 0, max: 49999 },
    { label: '₹50,000 - ₹60,000', min: 50000, max: 60000 },
    { label: 'Above ₹60,000', min: 60001, max: Infinity },
  ];

  const addToCart = async (product) => {
    await axios.post("https://techshop-backend-cwww.onrender.com/api/cart", product);
    setAddedItems((prev) => [...prev, product.name]);
    toast.success(`${product.name} added to cart successfully!`);
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

  const filteredDesktops = desktops.filter((product) => {
    const brand = product.brand?.toLowerCase() || '';
    const price = Number(product.price) || 0;

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(brand);

    const matchesSearch =
      product.name?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice = isPriceMatch(price);

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

          {/* Brand Filters */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Brands</h3>
            {brands.map((brand) => (
              <label
                key={brand}
                className="flex items-center space-x-2 mb-2 cursor-pointer capitalize"
              >
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

          {/* Price Filters */}
          <div>
            <h3 className="font-medium mb-2">Price</h3>
            {priceRanges.map((range) => (
              <label
                key={range.label}
                className="flex items-center space-x-2 mb-2 cursor-pointer"
              >
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

        {/* Right - Product Section */}
        <section className="lg:w-3/4 flex flex-col gap-6">
          {/* Search */}
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md shadow-md">
            <Search className="text-gray-500" size={30} />
            <input
              type="text"
              placeholder="Search desktops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {filteredDesktops.length > 0 ? (
              filteredDesktops.map((desktop) => (
                 
                <div
                  key={desktop._id}
                  className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                >
                  <img
                    src={desktop.image}
                    alt={desktop.name}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-lg">{desktop.name}</h3>
                  <p>{desktop.details}</p>
                  <p className="text-gray-600 mb-2">
                    ₹{Number(desktop.price).toLocaleString()}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.round(desktop.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="text-sm text-gray-500">
                      ({desktop.rating})
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button
                    disabled={addedItems.includes(desktop.name)}
                    onClick={() => addToCart(desktop)}
                    className={`mt-2 px-4 py-1 rounded text-white ${
                      addedItems.includes(desktop.name)
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    {addedItems.includes(desktop.name) ? 'Added' : 'Add to Cart'}
                  </button>
                
                </div>
          
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">No desktops found.</p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </section>
  );
};

export default DesktopProductList;


