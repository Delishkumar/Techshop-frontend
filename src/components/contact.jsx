

import Footer from "./footer";
import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      await axios.post ("https://techshop-backend-cwww.onrender.com/api/contacts", formData);
      setStatus(false);
      setFormData({ name: "", email: "", message: "" });
    }
    
     catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
    finally {
      setIsSubmitting(false);
      
    }
  };

  return (
    <section>
        


    

        { !status ?( <div className="max-w-60 h-screen mx-auto mt-10 p-6">
          <AnimatePresence>
             <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-sm w-full text-center space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="text-green-600 text-6xl"
            >
              ✅
            </motion.div>
            <h2 className="text-2xl font-bold text-green-700">
              Message send Successful
            </h2>
            <p className="text-gray-700 text-sm">
             will be in touch with you soon 💬...
            </p>
          </motion.div>
          </AnimatePresence>
          </div>):
          
          (<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact <Link to="/" className="text-2xl font-bold text-blue-600">
                  Tech<span className="text-lime-500">shop</span>
                </Link></h2>

        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded-md"
          required
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full mb-4 p-3 border rounded-md"
          required
        />
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full mb-4 p-3 border rounded-md"
          rows="4"
          required
        />

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
   {isSubmitting ? "Sending..." : "Send Message"}
        </button>  </form>
        </div>)}
    
    <Footer/>
    </section>
  );
};

export default ContactForm;
