import { useState } from 'react';
import { Star, Search } from 'lucide-react';
import ProductNavbar from './productNavbar';
import Footer from './footer';
import Navbar from "./navbar";
import MS1 from '../assets/samsungmonitor1.jpg'
import MS2 from '../assets/samsungmonitor2.jpg'
import MS3 from '../assets/samsungmonitor3.jpg'
import MS4 from '../assets/samsungmoniter4.jpg'
import ML1 from '../assets/lgmonitor1.jpg'
import ML2 from '../assets/lgmonitor2.jpg'
import ML3 from '../assets/lgmonitor3.jpg'
import ML4 from '../assets/lgmonitor4.jpg'
import MA1 from '../assets/acermonitor1.jpg'
import MA2 from '../assets/acermonitor2.jpg'
import MA3 from '../assets/acermonitor3.jpg'
import MA4 from '../assets/acermonitor4.jpg'
import MD1 from '../assets/dellmonitor1.jpg'
import MD2 from '../assets/dellmonitor2.jpg'
import MD3 from '../assets/dellmonitor3.jpg'
import MD4 from '../assets/dellmonitor4.jpg'
import axios from 'axios';
import { toast } from "react-toastify";

const laptops = [
  {
    id: 1,
    name: 'Samsung Inspiron 15',
    brand: 'Samsung',
    price: 5500,
    rating: 4.5,
    image: MS1,
    details:"FHD 1600 x 900 Pixels | Wall Mountable"
  },
  {
    id: 2,
    name: 'LG Pavilion',
    brand: 'LG',
    price: 17000,
    rating: 4.2,
    image: ML1,
     details:"20 Inch HD LED Monitor | Refresh Rate " 
  },
  {
    id: 3,
    name: 'acer IdeaPad',
    brand: 'acer',
    price: 4800,
    rating: 4.0,
    image: MA1,
    details:"22 Inch HD LED Monitor | Refresh Rate"
  },
  {
    id: 4,
    name: 'Dell VivoBook',
    brand: 'Dell',
    price: 5050,
    rating: 4.3,
    image: MD1,
    details:" Refresh Rate 60 Hz, 1680 X 1050 Disk"
  },
  {
    id: 5,
    name: 'acer IdeaPad2',
    brand: 'acer',
     price: 4300,
    rating: 4.0,
    image: MA2,
       details:"22 Inch HD LED Monitor | Refresh Rate"
  },
  {
    id: 6,
    name: 'Dell Lite',
    brand: 'Dell',
    price: 5100,
    rating: 4.3,
    image: MD2,
       details:"34 Inch HD LED Monitor | Refresh Rate "
  } 
  ,
  {
    id: 7,
    name: 'Samsung pluse',
    brand: 'Samsung',
    price: 5000,
    rating: 4.5,
    image: MS2,
       details:"22 Inch HD LED Monitor | Refresh Rate "
  },
  {
    id: 8,
    name: 'LG 12th gen',
    brand: 'LG',
    price: 12000,
    rating: 4.2,
    image: ML2,
       details:" HD LED Monitor | Refresh Rate 60hz"
  },
,
  {
    id: 9,
    name: 'Dell 13th gen',
    brand: 'Dell',
    price: 6800,
    rating: 4.5,
    image: MD3,
       details:"24 Inch HD LED Monitor | Refresh Rate 60 Hz"
  },
  {
    id: 10,
    name: 'LG vogan',
    brand: 'LG',
    price: 3500,
    rating: 4.2,
    image: ML3,
       details:"22 Inch HD LED Monitor | Refresh Rate 60 Hz"
  },
  {
    id: 11,
    name: 'acer fazal',
    brand: 'acer',
    price: 16000,
    rating: 4.3,
    image: MA3,
       details:"26 Inch HD LED Monitor | Refresh Rate 60 Hz"
  },
  {
    id: 12,
    name: 'Samsung inspri',
    brand: 'Samsung',
    price: 13000,
    rating: 4.3,
    image: MS3,
       details:"56 Inch HD LED Monitor | Refresh Rate 60 Hz"
  },
  {
    id: 13,
    name: 'Dell india',
    brand: 'Dell',
    price: 4500,
    rating: 4.5,
    image: MD4,
       details:"36 Inch HD LED Monitor | Refresh Rate 60 Hz"
  },
  {
    id: 14,
    name: 'LG lites',
    brand: 'LG',
    price: 6200,
    rating: 4.2,
    image: ML4,
       details:"24 Inch HD LED Monitor | Refresh Rate 60 Hz"
  },
  {
    id: 15,
    name: 'acer note',
    brand: 'acer',
    price: 5300,
    rating: 4.0,
    image: MA4,
       details:"22 Inch HD LED Monitor | Refresh Rate 60 Hz"
  },
  {
    id: 16,
    name: 'Samsung book',
    brand: 'Samsung',
    price: 6100,
    rating: 4.3,
    image: MS4,
       details:"22 Inch HD LED Monitor | Refresh Rate 60 Hz"
  },
];

const brands = ['Samsung', 'LG', 'acer', 'Dell'];

const priceRanges = [
  { label: 'Below ₹5000', min: 0, max: 4999 },
  { label: '₹5000 - ₹8000', min: 5000, max: 6000 },
  { label: 'Above ₹8000', min: 8001, max: Infinity },
];

const MonitorProductList = () => {
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
            placeholder="Search monitors..."
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
            <p className="text-center col-span-full text-gray-500">No moniter found.</p>
          )}
        </div>

    
      </section>
    </div>
    <Footer/>
    </section>
  );
};

export default MonitorProductList;