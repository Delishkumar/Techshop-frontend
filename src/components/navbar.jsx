
import { LogOut, Menu, ShoppingCart, X, LogIn,User } from "lucide-react";
import {  useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axios from "axios";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false)


  const [cartCount, setCartCount] = useState(0);

  const fetchCartCount = async () => {
    try {
      const res = await axios.get("https://techshop-backend-cwww.onrender.com/count");
      setCartCount(res.data.count);
    } catch (err) {
      console.error("Error fetching cart count:", err);
    }
  };

  useEffect(() => {
    fetchCartCount();

  
    const interval = setInterval(fetchCartCount, 1000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);

       navigate("/login")

      setUserMenuOpen(true)

    } catch (err) {
      console.error('Logout error', err);
    }
  };


  const handleLoginClick = () => {
    navigate("/login"); 
  };


  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Tech<span className="text-lime-500">shop</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/product" className="text-gray-700 hover:text-blue-600 font-medium">Products</Link>
          <Link to="/deals" className="text-gray-700 hover:text-blue-600 font-medium">Deals</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">

{/* User Profile/Login */}
{userMenuOpen ? (   <button
      onClick={handleLoginClick}
      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
    >
      <LogIn className="w-5 h-5" />
      <span>Login</span>
    </button>):(<button
        onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition"
    >
      <LogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>)}

          {/* Cart */}
        <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 
            rounded-full flex items-center justify-center">  {cartCount}</span> )}
  </Link>    

          <Link to={"/profile"}><User className=" w-6 h-6" /></Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

         
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow px-4 py-2 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/product" className="block text-gray-700 hover:text-blue-600">Products</Link>
          <Link to="/deals" className="block text-gray-700 hover:text-blue-600">Deals</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
