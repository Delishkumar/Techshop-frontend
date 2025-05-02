
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { auth } from "./firebase";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useState,useEffect } from "react";
const Card = () => {

  const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    const fetchCart = async () => {
      const res = await axios.get("https://techshop-backend-cwww.onrender.com/api/cart");
      setCartItems(res.data);
    };
  
    const removeFromCart = async (id) => {
      await axios.delete(`https://techshop-backend-cwww.onrender.com/api/cart/${id}`);
      fetchCart();
      
    };
  
    useEffect(() => {



      auth.onAuthStateChanged(function(user){
        if(user){
    navigate("/cart")
        }
        else{
            navigate("/login")
        }
      })

      fetchCart();
      const interval = setInterval(fetchCart, 10000);
      return () => clearInterval(interval);

  

    }, []);


    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
    

  return (
    <section>
  <Navbar/>
       
    <div className="p-4 bg-white shadow-xl rounded-2xl  h-screen mx-auto my-4">
      <h2 className="text-xl font-bold mb-4 text-center">🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <ul className=" flex items-center justify-around flex-wrap">
          {cartItems.map((item, index) => (
            <li key={index} className=" p-2 inline  ">
               
                <img src={item.image} alt="productimg" className="h-48"></img>
                <div className="flex justify-around items-center p-2">
                    <div className="p-2">
              <h2 className="font-semibold">{item.name}</h2>
              <h2 className="font-semibold">{item.details}</h2>
              <h3 className="text-sm text-gray-600">₹{item.price}</h3>
              <div className="text-sm text-gray-600">
                   
                  </div>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className=" hover:text-red-800 text-lg"
              >
                <Trash2 className="text-red-600"/>
              </button>
              </div>
            </li>
          ))}
             
        </ul>
      )}

<div className=" text-right p-10 text-lg font-bold ">
            Total: ₹{totalPrice.toFixed(2)}<br/>
           <Link to={"/ordernow"}  state={{ cartItems, totalPrice }}><button    disabled={cartItems.length === 0}
               className={`mt-2 px-4 py-1 rounded text-white ${
                cartItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-green-700"
              }`} >Shop Now</button></Link> 
          </div>

    </div>
   
    </section>
  );
};

export default Card;

