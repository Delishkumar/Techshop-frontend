import { useState} from 'react';
import { Search, Star } from 'lucide-react';
import ProductNavbar from './productNavbar';
import Navbar from "./navbar";
import Footer from './footer';
import axios from 'axios';
import HS1 from '../assets/sonyhp.jpg'
import HS2 from '../assets/sonyhp-2.jpg'
import HS3 from '../assets/sonyhp-3.jpg'
import HS4 from '../assets/sonyhp-4.jpg'
import HO1 from '../assets/oneplusehp1.jpg'
import HO2 from '../assets/oneplusehp2.jpg'
import HO3 from '../assets/oneplusehp3.jpg'
import HO4 from '../assets/oneplusehp4.jpg'
import HJ1 from '../assets/jblhp1.jpg'
import HJ2 from '../assets/jblhp2.jpg'
import HJ3 from '../assets/jblhp3.jpg'
import HJ4 from '../assets/jbl4.jpg'
import HB1 from '../assets/boathp1.jpg'
import HB2 from '../assets/boathp2.jpg'
import HB3 from '../assets/boathp3.jpg'
import HB4 from '../assets/boathp4.jpg'
import { toast } from "react-toastify";




const products = [
  {
    id: 1,
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    price: 29990,
    rating: 4.8,
    image: HS1,
    details:"120HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"9"
  },
  {
    id: 2,
    name: 'Oneplus QuietComfort',
    brand: 'Oneplus',
    price: 32499,
    rating: 4.7,
    image: HO1,
    details:"60HRS Battery,IPX6, v.6.2 Bluetooth ",
    instock:"12"
  },
  {
    id: 3,
    name: 'JBL Tune 760NC',
    brand: 'JBL',
    price: 5999,
    rating: 4.2,
    image: HJ1,
    details:"TWS Buds 110HRS Battery,IPz4, v.4.2 ",
    instock:"5"
  },
  {
    id: 4,
    name: 'boAt Rockerz 450',
    brand: 'boAt',
    price: 1999,
    rating: 4.1,
    image: HB1,
    details:"120HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"2"
  },
  {
    id: 5,
    name: 'JBL Tune 830NC',
    brand: 'JBL',
    price: 1899,
    rating: 4.2,
    image: HJ2,
    details:"120HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"16"
  },
  {
    id: 6,
    name: 'boAt Rockerz 350',
    brand: 'boAt',
    price: 1599,
    rating: 4.1,
    image: HB2,
    details:"120HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"7"
  },
  {
    id: 7,
    name: 'Sony sH-XM5',
    brand: 'Sony',
    price: 29990,
    rating: 4.8,
    image: HS2,
    details:"120HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"3"
  },
  {
    id: 8,
    name: 'Oneplus Comfort 45',
    brand: 'Oneplus',
    price: 32499,
    rating: 4.7,
    image: HO2,
    details:"80HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"16"
  },
  {
    id: 9,
    name: 'Sony MH-2000XM5',
    brand: 'Sony',
    price: 15990,
    rating: 4.8,
    image: HS3,
    details:"120HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"13"
  },
  {
    id: 10,
    name: 'Oneplus QuietComfort',
    brand: 'Oneplus',
    price: 3499,
    rating: 4.7,
    image: HO3,
    details:"120HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"7"
  },
  {
    id: 12,
    name: 'JBL Tune 7C',
    brand: 'JBL',
    price: 15999,
    rating: 4.2,
    image: HJ3,
    details:"IPX4, v.5.2 Bluetooth Display",
    instock:"19"
  },
  {
    id: 13,
    name: 'boAt Rockerz',
    brand: 'boAt',
    price: 1549,
    rating: 4.1,
    image: HB3,
    details:"Lion Battery,IPX4, v.5.2 Bluetooth",
    instock:"8"
  },
  {
    id: 14,
    name: 'JBL 30NC',
    brand: 'JBL',
    price: 2899,
    rating: 4.2,
    image: HJ4,
    details:"130HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"0"
  },
  {
    id: 15,
    name: 'boAt R15',
    brand: 'boAt',
    price: 1799,
    rating: 4.1,
    image: HB4,
    details:"IPX4,180HRS Battery, v.5.2 Bluetooth",
    instock:"1"
  },
  {
    id: 16,
    name: 'Sony XM5',
    brand: 'Sony',
    price: 12599,
    rating: 4.8,
    image: HS4,
    details:" TWS Ear Buds,60HRS Battery,IPX4",
    instock:"3"
  },
  {
    id: 17,
    name: 'Oneplus nord',
    brand: 'Oneplus',
    price: 16499,
    rating: 4.7,
    image: HO4,
    details:"80HRS Battery,IPX4, v.5.2 Bluetooth",
    instock:"15"
  },

];





const brands = ['Sony', 'Onepluse', 'JBL', 'boAt'];
const priceRanges = [
  { label: 'Under ₹5,000', min: 0, max: 4999 },
  { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
  { label: 'Above ₹10,000', min: 10001, max: Infinity },
];

const HeadphoneProductPage = () => {


 
  

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

  const filteredHeadphones = products.filter((product) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = isPriceMatch(product.price);
    return matchesBrand && matchesSearch && matchesPrice;
  });

  

  return (
    <section>
<Navbar/>
<ProductNavbar/>

    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left Filters */}
      <aside className="lg:w-1/4 bg-white p-4 rounded-xl shadow-md  h-full  md:sticky top-24 z-10">
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

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {filteredHeadphones.length > 0 ? (
            filteredHeadphones.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="font-semibold text-lg">{product.name}</h3>
        <p>{product.details}</p>
                <p className="text-gray-600 mb-2">₹{product.price.toLocaleString()}</p>
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
              onClick={() => addToCart(product)}
              className={`mt-2 px-4 py-1 rounded text-white ${
                addedItems.includes(product.name)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {addedItems.includes(product.name) ? "Added" : "Add to Cart"}
            </button>
            

          
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No headphones found.</p>
          )}
        </div>

      
      </section>
    </div>
    <Footer/>
    </section>
  );
};

export default HeadphoneProductPage;
