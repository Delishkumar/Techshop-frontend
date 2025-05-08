import { useState} from 'react';
import { Search, Star } from 'lucide-react';
import ProductNavbar from './productNavbar';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import Boat1 from '../assets/boathp1.jpg'
import Boat2 from '../assets/boathp2.jpg'
import Boat3 from '../assets/boathp3.jpg'
import Boat4 from '../assets/boathp4.jpg'
import JBL1 from '../assets/jbl4.jpg'
import JBL2 from '../assets/jblhp1.jpg'
import JBL3 from '../assets/jblhp2.jpg'
import JBL4 from '../assets/jblhp3.jpg'
import OnePlus1 from '../assets/oneplusehp1.jpg'
import OnePlus2 from '../assets/oneplusehp2.jpg'
import OnePlus3 from '../assets/oneplusehp3.jpg'
import OnePlus4 from '../assets/oneplusehp4.jpg'
import Sony1 from '../assets/sonyhp-2.jpg'
import Sony2 from '../assets/sonyhp-3.jpg'
import Sony3 from '../assets/sonyhp-4.jpg'
import Sony4 from '../assets/sonyhp.jpg'


const headphones = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "headphone",
    price: 29990,
    rating: 4.8,
    image: Sony1,
    description: "Industry-leading noise cancelling headphones with premium sound.",
    details: "Over-Ear, Bluetooth 5.2, ANC, 30hr Battery, Quick Charge",
    stock: 6,
    createdAt: new Date()
  },
  {
    id: 2,
    name: "Sony WF-C700N",
    brand: "Sony",
    category: "headphone",
    price: 8490,
    rating: 4.4,
    image: Sony2,
    description: "Compact TWS earbuds with ANC and clear call quality.",
    details: "In-Ear, ANC, 20hr Battery, IPX4, Type-C Charging",
    stock: 10,
    createdAt: new Date()
  },
  {
    id: 3,
    name: "Sony WH-CH520",
    brand: "Sony",
    category: "headphone",
    price: 4490,
    rating: 4.3,
    image: Sony3,
    description: "Lightweight wireless headphones with long-lasting battery.",
    details: "On-Ear, Bluetooth 5.0, 50hr Battery, Multipoint Connect",
    stock: 8,
    createdAt: new Date()
  },
  {
    id: 4,
    name: "Sony MDR-EX155AP",
    brand: "Sony",
    category: "headphone",
    price: 990,
    rating: 4.0,
    image: Sony4,
    description: "Wired in-ear headphones with clear bass and built-in mic.",
    details: "In-Ear, 3.5mm Jack, Mic, 9mm Driver, Lightweight Design",
    stock: 20,
    createdAt: new Date()
  },

  
  {
    id: 5,
    name: "OnePlus Buds Pro 2",
    brand: "OnePlus",
    category: "headphone",
    price: 11999,
    rating: 4.6,
    image: OnePlus1,
    description: "Premium TWS with spatial audio and adaptive ANC.",
    details: "In-Ear, Dual Drivers, ANC, LHDC Codec, 39hr Playback",
    stock: 5,
    createdAt: new Date()
  },
  {
    id: 6,
    name: "OnePlus Nord Buds 2",
    brand: "OnePlus",
    category: "headphone",
    price: 2999,
    rating: 4.3,
    image: OnePlus2,
    description: "Affordable earbuds with ANC and bass-heavy sound.",
    details: "In-Ear, ANC, 12.4mm Driver, 36hr Battery, Fast Pairing",
    stock: 12,
    createdAt: new Date()
  },
  {
    id: 7,
    name: "OnePlus Bullets Wireless Z2",
    brand: "OnePlus",
    category: "headphone",
    price: 1999,
    rating: 4.4,
    image: OnePlus3,
    description: "Neckband-style Bluetooth earphones with fast charging.",
    details: "In-Ear, Neckband, 12.4mm Bass Drivers, IP55, 30hr Battery",
    stock: 14,
    createdAt: new Date()
  },
  {
    id: 8,
    name: "OnePlus Buds Z2",
    brand: "OnePlus",
    category: "headphone",
    price: 4499,
    rating: 4.2,
    image: OnePlus4,
    description: "Compact ANC earbuds with Dolby Atmos support.",
    details: "In-Ear, ANC, 38hr Battery, Dolby Atmos, Bluetooth 5.2",
    stock: 9,
    createdAt: new Date()
  },

  
  {
    id: 9,
    name: "JBL Tune 760NC",
    brand: "JBL",
    category: "headphone",
    price: 6499,
    rating: 4.5,
    image: JBL1,
    description: "Over-ear headphones with powerful bass and ANC.",
    details: "Over-Ear, ANC, 50hr Battery, Bluetooth 5.0, Fast Charge",
    stock: 6,
    createdAt: new Date()
  },
  {
    id: 10,
    name: "JBL Wave Beam",
    brand: "JBL",
    category: "headphone",
    price: 3499,
    rating: 4.3,
    image: JBL2,
    description: "TWS earbuds with deep bass and voice assistant support.",
    details: "In-Ear, 32hr Battery, IP54, Touch Controls, Bluetooth 5.2",
    stock: 11,
    createdAt: new Date()
  },
  {
    id: 11,
    name: "JBL Endurance Run",
    brand: "JBL",
    category: "headphone",
    price: 1299,
    rating: 4.0,
    image: JBL3,
    description: "Wired sports earphones with sweatproof design.",
    details: "In-Ear, 3.5mm Jack, Sweatproof, FlipHook Design",
    stock: 15,
    createdAt: new Date()
  },
  {
    id: 12,
    name: "JBL Live Pro 2",
    brand: "JBL",
    category: "headphone",
    price: 10990,
    rating: 4.6,
    image: JBL4,
    description: "Flagship earbuds with ANC and legendary JBL sound.",
    details: "In-Ear, Adaptive ANC, 40hr Battery, 6 Mics, IPX5",
    stock: 5,
    createdAt: new Date()
  },

  
  {
    id: 13,
    name: "boAt Rockerz 255 Pro+",
    brand: "boAt",
    category: "headphone",
    price: 1499,
    rating: 4.2,
    image: Boat1,
    description: "Affordable neckband with deep bass and long battery life.",
    details: "Neckband, 40hr Battery, ASAP Charge, IPX7, Bluetooth 5.0",
    stock: 18,
    createdAt: new Date()
  },
  {
    id: 14,
    name: "boAt Airdopes 141",
    brand: "boAt",
    category: "headphone",
    price: 1199,
    rating: 4.1,
    image: Boat2,
    description: "Popular TWS earbuds with ENx noise reduction.",
    details: "In-Ear, 42hr Battery, ENx Tech, IPX4, Type-C Charging",
    stock: 25,
    createdAt: new Date()
  },
  {
    id: 15,
    name: "boAt Nirvana 751 ANC",
    brand: "boAt",
    category: "headphone",
    price: 3999,
    rating: 4.3,
    image: Boat3,
    description: "Over-ear headphones with active noise cancellation.",
    details: "Over-Ear, ANC, 65hr Playback, Bluetooth 5.0, ASAP Charge",
    stock: 7,
    createdAt: new Date()
  },
  {
    id: 16,
    name: "boAt Bassheads 225",
    brand: "boAt",
    category: "headphone",
    price: 599,
    rating: 4.0,
    image: Boat4,
    description: "Wired earphones with super extra bass and metal finish.",
    details: "In-Ear, 3.5mm Jack, Tangle-Free Cable, Mic, Bass Boost",
    stock: 30,
    createdAt: new Date()
  }
]

const HeadphoneProductPage = () => {


  const brands = [ 'oneplus', 'jbl', 'boat','sony'];
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

         
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {filteredHeadphones.length > 0 ? (
                filteredHeadphones.map((product) => (
                
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
                          e.preventDefault(); 
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
                  
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No headphones found.
                </p>
              )}
            </div>
          
        </section>
      </div>

      <Footer />
    </section>
  );
};

export default HeadphoneProductPage;

