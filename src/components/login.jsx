import { useState,useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    auth.onAuthStateChanged(function(user){
      if(user){
  navigate("/")
      }
    
    })
  },[navigate])
  
const handleLogin = async (e) => {
    
     

    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setTimeout(() => navigate('/'), 35000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <AnimatePresence>
        {!success ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-md w-full space-y-5 m-5"
          >
            <h2 className="text-3xl font-mono text-center ">
              Welcome Back
            </h2>
            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <motion.input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <motion.input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </motion.button>
            </form>

            <p className="text-sm text-center text-gray-600">
              Don't have an account?
              <Link to={"/signub"} className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </motion.div>
        ) : (
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
              Login Successful
            </h2>
            <p className="text-gray-700 text-sm">
              Redirecting to homepage...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
