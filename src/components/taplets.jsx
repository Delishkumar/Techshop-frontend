import { useState } from 'react';
import { Star, Search } from 'lucide-react';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import Footer from './footer';
import TS1 from '../assets/samsungtab1.jpg'
import TS2 from '../assets/samsungtab2.jpg'
import TS3 from '../assets/samsungtab3.jpg'
import TS4 from '../assets/samsungtab2.jpg'
import TA1 from '../assets/applrtab1.jpg'
import TA2 from '../assets/appletab2.jpg'
import TA3 from '../assets/appletab3.jpg'
import TA4 from '../assets/appletab4.jpg'
import TL1 from '../assets/lenovotab1.jpg'
import TL2 from '../assets/lenovotab2.jpg'
import TL3 from '../assets/lenovotab3.jpg'
import TL4 from '../assets/lenovotab4.jpg'
import TAS1 from '../assets/asustab1.jpg'
import TAS2 from '../assets/asustab2.jpg'
import TAS3 from '../assets/asustab3.jpg'
import TAS4 from '../assets/xiomitab.jpg'
import axios from 'axios';
import { toast } from "react-toastify";
const laptops = [
  {
    id: 1,
    name: 'Samsung Inspiron 15',
    brand: 'Samsung',
    price: 55000,
    rating: 4.5,
    image: TS1,
    details:"Display HD| 4 GB RAM, 64 GB ROM "
  },
  {
    id: 2,
    name: 'Apple Pavilion',
    brand: 'Apple',
    price: 62000,
    rating: 4.2,
    image: TA1,
    details:"FHD Display| 6 GB RAM, 128 GB ROM " 
  },
  {
    id: 3,
    name: 'Lenovo IdeaPad',
    brand: 'Lenovo',
    price: 48000,
    rating: 4.0,
    image: TL1,
    details:"mini, 4 GB RAM, 64 GB ROM FHD"
  },
  {
    id: 4,
    name: 'Xiaomi VivoBook',
    brand: 'Xiaomi',
    price: 51000,
    rating: 4.3,
    image: TAS4,
    details:" 11 inch Display 8 GB RAM 64GB, "
  },
  {
    id: 5,
    name: 'Lenovo IdeaPad2',
    brand: 'Lenovo',
     price: 43000,
    rating: 4.0,
    image: TL2,
     details:" 11 inch Display 8 GB RAM, 256 GB ROM "
  },
  {
    id: 6,
    name: 'Asus Lite',
    brand: 'Asus',
    price: 51000,
    rating: 4.3,
    image: TAS2,
     details:" MOVO 6 GB RAM, 64 GB ROM Dual speaker"
  } 
  ,
  {
    id: 7,
    name: 'Samsung Inspiron 12',
    brand: 'Samsung',
    price: 65000,
    rating: 4.5,
    image: TS2,
     details:"mini, 4 GB RAM, 64 GB ROM Dual speaker"
  },
  {
    id: 8,
    name: 'Apple 12th gen',
    brand: 'Apple',
    price: 52000,
    rating: 4.2,
    image: TA2,
     details:" 4 GB RAM, 64 GB ROM Dual speaker"
  },
,
  {
    id: 9,
    name: 'Samsung 13th gen',
    brand: 'Samsung',
    price: 68000,
    rating: 4.5,
    image: TS3,
     details:"FHD, 12 GB RAM, 256 GB ROM Dual sim"
  },
  {
    id: 10,
    name: 'Apple vogan',
    brand: 'Apple',
    price: 32000,
    rating: 4.2,
    image: TA3,
     details:"mini, 4 GB RAM, 64 GB ROM Dual speaker"
  },
  {
    id: 11,
    name: 'Lenovo fazal',
    brand: 'Lenovo',
    price: 63000,
    rating: 4.3,
    image: TL3,
     details:"8 GB RAM, 156 GB ROM "
  },
  {
    id: 12,
    name: 'Asus inspri',
    brand: 'Asus',
    price: 39000,
    rating: 4.3,
    image: TAS3,
     details:"FWE 4 GB RAM, 64 GB ROM Dual speaker"
  },
  {
    id: 13,
    name: 'Samsung india',
    brand: 'Samsung',
    price: 45000,
    rating: 4.5,
    image: TS4,
     details:"mini, 4 GB RAM, 64 GB ROM Dual speaker"
  },
  {
    id: 14,
    name: 'Apple lites',
    brand: 'Apple',
    price: 62000,
    rating: 4.2,
    image: TA4,
     details:" 6 GB RAM, 256 GB ROM Dual speaker"
  },
  {
    id: 15,
    name: 'Lenovo note',
    brand: 'Lenovo',
    price: 53000,
    rating: 4.0,
    image: TL4,
     details:"mini, 12 GB RAM, 124 GB ROM Dual speaker"
  },
  {
    id: 16,
    name: 'Asus book',
    brand: 'Asus',
    price: 61000,
    rating: 4.3,
    image: TAS1,
     details:"6 GB RAM, 64 GB ROM Dual speaker"
  },
];

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
            placeholder="Search tablets..."
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
                <p>{laptop.details}</p>
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
            <p className="text-center col-span-full text-gray-500">No tablets found.</p>
          )}
        </div>

        
      </section>
    </div>
    <Footer/>
    </section>
  );
};

export default TabProductList;

