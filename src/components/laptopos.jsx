import { useState } from 'react';
import { Star, Search } from 'lucide-react';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import Footer from './footer';
import LD1 from '../assets/dellsmartchoice.jpg'
import LD2 from '../assets/dellgaming.jpg'
import LD3 from '../assets/dellins.jpg'
import LD4 from '../assets/dellinspiron.jpg'
import LH1 from '../assets/hp12thgenration.webp'
import LH2 from '../assets/hp255notebook.jpg'
import LH3 from '../assets/hpamdryzen.webp'
import LH4 from '../assets/hpvictus.webp'
import LL1 from '../assets/lenovoideapad.webp'
import LL2 from '../assets/lenovo think bad.webp'
import LL3 from '../assets/lenovoideapad.webp'
import LL4 from '../assets/lenovov15.jpg'
import LA1 from '../assets/asus vivobook15.jpg'
import LA2 from '../assets/asustufgaming.jpg'
import LA3 from '../assets/asusvivobook.webp'
import LA4 from '../assets/asusvivobook16x.jpg'
import axios from 'axios';
import { toast } from "react-toastify";
const laptops = [
  {
    id: 1,
    name: 'Dell Inspiron 15',
    brand: 'Dell',
    price: 55000,
    rating: 4.5,
    image: LD1,
  },
  {
    id: 2,
    name: 'HP Pavilion',
    brand: 'HP',
    price: 62000,
    rating: 4.2,
    image: LH1,
  },
  {
    id: 3,
    name: 'Lenovo IdeaPad',
    brand: 'Lenovo',
    price: 48000,
    rating: 4.0,
    image: LL1,
  },
  {
    id: 4,
    name: 'Asus VivoBook',
    brand: 'Asus',
    price: 51000,
    rating: 4.3,
    image: LA1,
  },
  {
    id: 5,
    name: 'Lenovo IdeaPad2',
    brand: 'Lenovo',
     price: 43000,
    rating: 4.0,
    image: LL2,
  },
  {
    id: 6,
    name: 'Asus Lite',
    brand: 'Asus',
    price: 51000,
    rating: 4.3,
    image: LA2,
  } 
  ,
  {
    id: 7,
    name: 'Dell Inspiron 12',
    brand: 'Dell',
    price: 65000,
    rating: 4.5,
    image: LD2,
  },
  {
    id: 8,
    name: 'HP 12th gen',
    brand: 'HP',
    price: 52000,
    rating: 4.2,
    image: LH2,
  },
,
  {
    id: 9,
    name: 'Dell 13th gen',
    brand: 'Dell',
    price: 68000,
    rating: 4.5,
    image: LD3,
  },
  {
    id: 10,
    name: 'HP vogan',
    brand: 'HP',
    price: 32000,
    rating: 4.2,
    image: LH3,
  },
  {
    id: 11,
    name: 'Lenovo fazal',
    brand: 'Lenovo',
    price: 63000,
    rating: 4.3,
    image: LL3,
  },
  {
    id: 12,
    name: 'Asus inspri',
    brand: 'Asus',
    price: 39000,
    rating: 4.3,
    image: LA3,
  },
  {
    id: 13,
    name: 'Dell india',
    brand: 'Dell',
    price: 45000,
    rating: 4.5,
    image: LD4,
  },
  {
    id: 14,
    name: 'HP lites',
    brand: 'HP',
    price: 62000,
    rating: 4.2,
    image: LH4,
  },
  {
    id: 15,
    name: 'Lenovo note',
    brand: 'Lenovo',
    price: 53000,
    rating: 4.0,
    image: LL4,
  },
  {
    id: 16,
    name: 'Asus book',
    brand: 'Asus',
    price: 61000,
    rating: 4.3,
    image: LA4,
  },
];

const brands = ['Dell', 'HP', 'Lenovo', 'Asus'];

const priceRanges = [
  { label: 'Below ₹50,000', min: 0, max: 49999 },
  { label: '₹50,000 - ₹60,000', min: 50000, max: 60000 },
  { label: 'Above ₹60,000', min: 60001, max: Infinity },
];

const LaptopProductList = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredLaptops = laptops.filter((laptop) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(laptop.brand);
    const matchesSearch = laptop.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = isPriceMatch(laptop.price);
    return matchesBrand && matchesSearch && matchesPrice;
  });





  return (
    <section>
<Navbar/>
<ProductNavbar/>

    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left - Filter Section */}
      <aside className="lg:w-1/4 bg-white p-4 rounded-xl shadow-md h-full  md:sticky top-24 z-10">
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

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
          {filteredLaptops.length > 0 ? (
            filteredLaptops.map((laptop) => (
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
                <p className="text-gray-600 mb-2">₹{laptop.price.toLocaleString()}</p>
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
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {addedItems.includes(laptop.name) ? "Added" : "Add to Cart"}
            </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No laptops found.</p>
          )}
        </div>

       
          
      </section>
    </div>
    <Footer/>
    </section>
  );
};

export default LaptopProductList;

