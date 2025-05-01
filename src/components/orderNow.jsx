import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
const OrderNow = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { cartItems = [], totalPrice = 0 } = location.state || {};

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      ...userInfo,
      cartItems,
      totalAmount: totalPrice,
    };

    try {
      const response = await fetch('https://techshop-backend-cwww.onrender.com/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Order Placed!" );
        setUserInfo("")
        navigate("/")
      } else {
        alert(data.error || 'Failed to place order');
      }
    } catch (error) {
      alert('Error placing order');
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Order Now</h1>

      {/* Cart Summary */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => (
            <div key={i} className="flex justify-between py-2 border-b">
              <span>{item.name} (x{item.quantity || 1})</span>
              <span>₹{item.price * (item.quantity || 1)}</span>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* User Info Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
        <form className="space-y-4">
          <input
            className="w-full border rounded p-2"
            type="text"
            placeholder="Full Name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded p-2"
            type="email"
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded p-2"
            type="text"
            placeholder="Address"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
          />
          <input
            className="w-full border rounded p-2"
            type="tel"
            placeholder="Phone"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
          />
        </form>
      </div>

      {/* Place Order Button */}
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
        onClick={handlePlaceOrder}
        disabled={cartItems.length === 0}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderNow;

