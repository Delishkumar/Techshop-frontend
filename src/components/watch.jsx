import { useState} from 'react';
import { Search, Star } from 'lucide-react';
import Footer from './footer';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import Apple5 from '../assets/applewatch1.jpg'
import Apple6 from '../assets/applewatch2.jpg'
import Apple7 from '../assets/applewatch3.jpg'
import Apple8 from '../assets/applewatch4.jpg'
import Noise1 from '../assets/noisewatch1.jpg'
import Noise2 from '../assets/noisewatch2.jpg'
import Noise3 from '../assets/noisewatch3.jpg'
import Noise4 from '../assets/noisewatch4.jpg'
import Samsung9 from '../assets/samsungwatch1.jpg'
import Samsung10 from '../assets/samsungwatch2.jpg'
import Samsung11 from '../assets/samsungwatch3.jpg'
import Samsung12 from '../assets/samsungwatch4.jpg'
import Boat5 from '../assets/boatwatch2.jpg'
import Boat6 from '../assets/boatwatch3.jpg'
import Boat7 from '../assets/boatwatch4.jpg'
import Boat8 from '../assets/boatwatch2.jpg'


const smartwatches = [
        {
            id: 1,
            name: "Apple Watch Series 9",
            brand: "Apple",
            category: "smartwatch",
            price: 41900,
            rating: 4.9,
            image: Apple5,
            description: "Latest Apple Watch with advanced health sensors and double tap gesture.",
            details: "45mm, Always-On Retina, S9 SiP, Blood Oxygen, ECG, WatchOS 10",
            stock: 5,
            createdAt: new Date()
          },
          {
            id: 2,
            name: "Apple Watch SE (2nd Gen)",
            brand: "Apple",
            category: "smartwatch",
            price: 29900,
            rating: 4.6,
            image: Apple6,
            description: "Affordable Apple Watch with core health features and crash detection.",
            details: "44mm, Retina Display, Crash Detection, Swimproof, WatchOS 10",
            stock: 7,
            createdAt: new Date()
          },
          {
            id: 3,
            name: "Apple Watch Ultra 2",
            brand: "Apple",
            category: "smartwatch",
            price: 89900,
            rating: 4.8,
            image: Apple7,
            description: "Rugged Apple Watch built for endurance, exploration, and adventure.",
            details: "49mm, Titanium Case, Dual-Frequency GPS, 36hr Battery, Depth Gauge",
            stock: 3,
            createdAt: new Date()
          },
          {
            id: 4,
            name: "Apple Watch Series 8",
            brand: "Apple",
            category: "smartwatch",
            price: 45900,
            rating: 4.7,
            image: Apple8,
            description: "Feature-packed smartwatch with temperature sensing and cycle tracking.",
            details: "41mm, ECG, Blood Oxygen, Temp Sensor, Always-On Display",
            stock: 4,
            createdAt: new Date()
          },
        
          
          {
            id: 5,
            name: "Samsung Galaxy Watch6",
            brand: "Samsung",
            category: "smartwatch",
            price: 32999,
            rating: 4.6,
            image: Samsung9,
            description: "Smartwatch with fitness tracking and seamless Galaxy integration.",
            details: "44mm, Super AMOLED, Exynos W930, Wear OS, BioActive Sensor",
            stock: 8,
            createdAt: new Date()
          },
          {
            id: 6,
            name: "Samsung Galaxy Watch5 Pro",
            brand: "Samsung",
            category: "smartwatch",
            price: 44999,
            rating: 4.7,
            image: Samsung10,
            description: "Built for adventure with GPS tracking and rugged design.",
            details: "45mm, Sapphire Crystal, LTE, Route Workout, 80hr Battery",
            stock: 5,
            createdAt: new Date()
          },
          {
            id: 7,
            name: "Samsung Galaxy Watch4",
            brand: "Samsung",
            category: "smartwatch",
            price: 19999,
            rating: 4.5,
            image: Samsung11,
            description: "Stylish smartwatch with body composition and Google apps.",
            details: "40mm, Bioelectrical Impedance, ECG, Sleep Tracker, Wear OS",
            stock: 9,
            createdAt: new Date()
          },
          {
            id: 8,
            name: "Samsung Galaxy Fit3",
            brand: "Samsung",
            category: "smartwatch",
            price: 4999,
            rating: 4.3,
            image: Samsung12,
            description: "Lightweight fitness tracker with AMOLED display and 13-day battery.",
            details: "1.6” AMOLED, 13-day Battery, 5ATM, 100+ Workouts, Sleep Monitoring",
            stock: 15,
            createdAt: new Date()
          },
        
          
          {
            id: 9,
            name: "Noise ColorFit Ultra 3",
            brand: "Noise",
            category: "smartwatch",
            price: 3499,
            rating: 4.4,
            image: Noise1,
            description: "Premium design with AMOLED display and smart gesture control.",
            details: "1.96” AMOLED, BT Calling, 7-day Battery, 100+ Watchfaces, IP68",
            stock: 20,
            createdAt: new Date()
          },
          {
            id: 10,
            name: "NoiseFit Halo",
            brand: "Noise",
            category: "smartwatch",
            price: 2999,
            rating: 4.2,
            image: Noise2,
            description: "Round dial smartwatch with stainless steel design.",
            details: "1.43” AMOLED, Always-On Display, BT Calling, 7-day Battery",
            stock: 18,
            createdAt: new Date()
          },
          {
            id: 11,
            name: "Noise ColorFit Icon 2",
            brand: "Noise",
            category: "smartwatch",
            price: 2499,
            rating: 4.1,
            image: Noise3,
            description: "Budget smartwatch with call function and fitness tracking.",
            details: "1.8” TFT, BT Calling, SpO2, Heart Rate, Sleep Monitor",
            stock: 22,
            createdAt: new Date()
          },
          {
            id: 12,
            name: "NoiseFit Force Plus",
            brand: "Noise",
            category: "smartwatch",
            price: 3999,
            rating: 4.3,
            image: Noise4,
            description: "Rugged smartwatch with functional crown and tough build.",
            details: "1.46” AMOLED, BT Calling, 550 nits Brightness, Military Design",
            stock: 10,
            createdAt: new Date()
          },
        
    
          {
            id: 13,
            name: "boAt Wave Sigma",
            brand: "boAt",
            category: "smartwatch",
            price: 1499,
            rating: 4.0,
            image: Boat5,
            description: "Budget-friendly smartwatch with a large HD display.",
            details: "2.01” HD Display, BT Calling, Health Monitor, 7-day Battery",
            stock: 30,
            createdAt: new Date()
          },
          {
            id: 14,
            name: "boAt Ultima Call",
            brand: "boAt",
            category: "smartwatch",
            price: 1699,
            rating: 4.1,
            image: Boat6,
            description: "BT calling smartwatch with stylish metal build.",
            details: "1.83” HD Display, 700+ Watchfaces, SpO2, IP68",
            stock: 25,
            createdAt: new Date()
          },
          {
            id: 15,
            name: "boAt Lunar Connect Pro",
            brand: "boAt",
            category: "smartwatch",
            price: 3999,
            rating: 4.3,
            image: Boat7,
            description: "AMOLED smartwatch with Google Fit & custom faces.",
            details: "1.45” AMOLED, DIY Watch Face, Sports Mode, BT Calling",
            stock: 17,
            createdAt: new Date()
          },
          {
            id: 16,
            name: "boAt Storm Call 2",
            brand: "boAt",
            category: "smartwatch",
            price: 2199,
            rating: 4.2,
            image: Boat8,
            description: "Smartwatch with HD display and functional crown.",
            details: "1.83” HD Display, BT Calling, Health Suite, 7-day Battery",
            stock: 28,
            createdAt: new Date()
          } ,
   
]

const WatchProductPage = () => {

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItems, setAddedItems] = useState([]);



  

  const brands = [ 'Samsung', 'Noise', 'boAt','Apple'];
  const priceRanges = [
    { label: 'Under ₹5,000', min: 0, max: 4999 },
    { label: '₹5,000 - ₹20,000', min: 5000, max: 20000 },
    { label: 'Above ₹20,000', min: 20001, max: Infinity },
  ];

  
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
          
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {filteredWatches.length > 0 ? (
                filteredWatches.map((watch) => (
                  
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
                
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No smartwatches found.
                </p>
              )}
            </div>
        
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default WatchProductPage;
