import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/Techshop logo.ico'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
           <img src={logo} alt='logo'></img> 
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Tech<span className="text-lime-500">shop</span></h2>
          <p className="text-sm text-gray-400">
            Your one-stop shop for the latest gadgets, accessories, and tech gear.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <div className="space-y-2 text-sm text-gray-300 grid grid-flow-row-dense">
            <Link to={"/laptop"} className="hover:text-white">Laptops</Link>
            <Link to={"/watch"} className="hover:text-white">Smartwatchs</Link>
            <Link to={"/headphone"} className="hover:text-white">Headphones</Link>
            <Link to={"/accessories"} className="hover:text-white">Accessories</Link>
           
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: support@techshop.com</p>
          <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TechShop. All rights reserved.
      </div>
    </footer>
  );
}
