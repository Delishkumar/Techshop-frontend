import { useState } from 'react';
import { Star, Search } from 'lucide-react';
import Navbar from './navbar';
import ProductNavbar from './productNavbar';
import Footer from './footer';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import Dell5 from '../assets/delllaptop1.jpg'
import Dell6 from '../assets/delllaptop2.jpg'
import Dell7 from '../assets/delllaptop3.jpg'
import Dell8 from '../assets/delllaptop4.jpg'
import HP5 from '../assets/hplaptop1.jpg'
import HP6 from '../assets/hplaptop2.jpg'
import HP7 from '../assets/hplaptop3.jpg'
import HP8 from '../assets/hplaptop4.jpg'
import Lenovo5 from '../assets/lenovolaptop1.jpg'
import Lenovo6 from '../assets/lenovolaptop2.jpg'
import Lenovo7 from '../assets/lenovolaptop3.jpg'
import Lenovo8 from '../assets/lenovolaptop4.jpg'
import Asus5 from '../assets/asuslaptop1.jpg'
import Asus6 from '../assets/asuslaptop2.jpg'
import Asus7 from '../assets/asuslaptop3.jpg'
import Asus8 from '../assets/asuslaptop4.jpg'


const 
laptops = [
  {
              id: 1,
              name: "Dell Inspiron 15",
              brand: "Dell",
              category: "laptop",
              price: 58000,
              rating: 4.3,
              image: Dell5,
              description: "Dell Inspiron with Intel i5 processor and Full HD display for office and personal tasks.",
              details: "15.6\" FHD, Intel Core i5, 8GB RAM, 512GB SSD, Windows 11",
              stock: 6,
              createdAt: new Date()
            },
            {
              id: 2,
              name: "Dell XPS 13",
              brand: "Dell",
              category: "laptop",
              price: 98000,
              rating: 4.7,
              image: Dell6,
              description: "Premium Dell XPS 13 with edge-to-edge display and 12th Gen Intel processor.",
              details: "13.4\" UHD+, Intel Core i7, 16GB RAM, 1TB SSD, Windows 11",
              stock: 3,
              createdAt: new Date()
            },
            {
              id: 3,
              name: "Dell Vostro 14",
              brand: "Dell",
              category: "laptop",
              price: 49000,
              rating: 4.2,
              image: Dell7,
              description: "Dell Vostro 14 ideal for small business with solid specs and durability.",
              details: "14\" FHD, Intel Core i3, 8GB RAM, 256GB SSD, Windows 11",
              stock: 10,
              createdAt: new Date()
            },
            {
              id: 4,
              name: "Dell Latitude 7420",
              brand: "Dell",
              category: "laptop",
              price: 88000,
              rating: 4.5,
              image: Dell8,
              description: "Enterprise-grade Latitude with robust security and premium finish.",
              details: "14\" FHD, Intel Core i7, 16GB RAM, 512GB SSD, Windows 11 Pro",
              stock: 5,
              createdAt: new Date()
            },
          
            
            {
              id: 5,
              name: "HP Pavilion x360",
              brand: "HP",
              category: "laptop",
              price: 64000,
              rating: 4.5,
              image: HP5,
              description: "HP Pavilion x360 convertible laptop for creative professionals.",
              details: "14\" Touch, Intel Core i5, 16GB RAM, 512GB SSD, Windows 11",
              stock: 8,
              createdAt: new Date()
            },
            {
              id: 6,
              name: "HP Envy 13",
              brand: "HP",
              category: "laptop",
              price: 76000,
              rating: 4.4,
              image: HP6,
              description: "HP Envy 13 is a stylish, ultra-lightweight laptop with great battery life.",
              details: "13.3\" FHD, Intel Core i5, 16GB RAM, 512GB SSD, Windows 11",
              stock: 7,
              createdAt: new Date()
            },
            {
              id: 7,
              name: "HP Victus 16",
              brand: "HP",
              category: "laptop",
              price: 84000,
              rating: 4.6,
              image: HP7,
              description: "HP Victus gaming laptop with powerful GPU and thermal management.",
              details: "16.1\" FHD, Ryzen 7, 16GB RAM, 1TB SSD, NVIDIA GTX 3050, Windows 11",
              stock: 4,
              createdAt: new Date()
            },
            {
              id: 8,
              name: "HP 15s",
              brand: "HP",
              category: "laptop",
              price: 44000,
              rating: 4.0,
              image: HP8,
              description: "HP 15s affordable everyday laptop for students and light users.",
              details: "15.6\" HD, Intel Core i3, 8GB RAM, 512GB SSD, Windows 11",
              stock: 12,
              createdAt: new Date()
            },
          
            
            {
              id: 9,
              name: "Lenovo IdeaPad Slim 3",
              brand: "Lenovo",
              category: "laptop",
              price: 51000,
              rating: 4.1,
              image: Lenovo5,
              description: "Lightweight IdeaPad Slim 3 is perfect for portability and productivity.",
              details: "15.6\" FHD, Ryzen 5, 8GB RAM, 512GB SSD, Windows 11",
              stock: 15,
              createdAt: new Date()
            },
            {
              id: 10,
              name: "Lenovo Legion 5",
              brand: "Lenovo",
              category: "laptop",
              price: 94000,
              rating: 4.7,
              image: Lenovo6,
              description: "Lenovo Legion gaming beast with RTX graphics and performance cooling.",
              details: "15.6\" FHD, Ryzen 7, 16GB RAM, 1TB SSD, RTX 3060, Windows 11",
              stock: 6,
              createdAt: new Date()
            },
            {
              id: 11,
              name: "Lenovo ThinkPad E14",
              brand: "Lenovo",
              category: "laptop",
              price: 72000,
              rating: 4.5,
              image: Lenovo7,
              description: "ThinkPad E14 is a business-grade laptop known for durability and security.",
              details: "14\" FHD, Intel Core i5, 16GB RAM, 512GB SSD, Windows 11 Pro",
              stock: 9,
              createdAt: new Date()
            },
            {
              id: 12,
              name: "Lenovo Yoga Slim 7",
              brand: "Lenovo",
              category: "laptop",
              price: 86000,
              rating: 4.6,
              image: Lenovo8,
              description: "Yoga Slim 7 offers power and elegance in an ultra-slim chassis.",
              details: "14\" FHD, Intel Core i7, 16GB RAM, 1TB SSD, Windows 11",
              stock: 4,
              createdAt: new Date()
            },
          
            
            {
              id: 13,
              name: "Asus VivoBook 14",
              brand: "Asus",
              category: "laptop",
              price: 46000,
              rating: 4.0,
              image: Asus5,
              description: "Slim and portable Asus VivoBook for students and professionals.",
              details: "14\" FHD, Intel Core i3, 8GB RAM, 256GB SSD, Windows 11",
              stock: 10,
              createdAt: new Date()
            },
            {
              id: 14,
              name: "Asus ROG Strix G15",
              brand: "Asus",
              category: "laptop",
              price: 105000,
              rating: 4.8,
              image: Asus6,
              description: "ROG Strix G15 built for gamers with high refresh rate and RTX graphics.",
              details: "15.6\" 144Hz, Ryzen 7, 16GB RAM, 1TB SSD, RTX 4060, Windows 11",
              stock: 3,
              createdAt: new Date()
            },
            {
              id: 15,
              name: "Asus ZenBook 13",
              brand: "Asus",
              category: "laptop",
              price: 79000,
              rating: 4.4,
              image: Asus7,
              description: "Asus ZenBook 13 is a stylish ultrabook with OLED display and long battery.",
              details: "13.3\" OLED, Intel Core i5, 16GB RAM, 512GB SSD, Windows 11",
              stock: 5,
              createdAt: new Date()
            },
            {
              id: 16,
              name: "Asus TUF Gaming F15",
              brand: "Asus",
              category: "laptop",
              price: 88000,
              rating: 4.6,
              image: Asus8,
              description: "Asus TUF series gaming laptop built for performance and rugged usage.",
              details: "15.6\" FHD, Intel Core i7, 16GB RAM, 1TB SSD, RTX 3050, Windows 11",
              stock: 4,
              createdAt: new Date()
            }
]

const brands = [ 'HP', 'Lenovo', 'Asus','Dell',];

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

  const filteredLaptops = laptops.filter((laptop) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(laptop.brand);
    const matchesSearch = laptop.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = isPriceMatch(laptop.price);
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {filteredLaptops.length > 0 ? (
                filteredLaptops.map((laptop) => (
                  <Link to={`/product/${laptop.id}`} key={laptop.id}>
                  <div
                    key={laptop.id}
                    className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                  >
                       <img
                             src={laptop.image}
                              alt={laptop.name}   className="w-full h-40 object-contain mb-4"
                />



                    <h3 className="font-semibold text-lg">{laptop.name}</h3>
                    <p className="text-gray-800 mb-2">{laptop.details}</p>
                    <p className="text-gray-800 mb-2">₹{laptop.price.toLocaleString()}</p>

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
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {addedItems.includes(laptop.name) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                  </Link>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">No laptops found.</p>
              )}
            </div>
          
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default LaptopProductList;

