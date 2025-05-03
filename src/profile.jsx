import React from "react";
import { User, Mail,  LogOut } from "lucide-react";
import { getAuth } from "firebase/auth";
import Navbar from "./components/navbar";

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-2xl p-8">
          <div className="text-center mb-6">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/150?img=31"}
              alt="profile"
              className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-500 shadow-lg"
            />
            <h2 className="mt-4 text-3xl font-bold text-gray-800 flex justify-center items-center gap-2">
              <User className="text-indigo-500 w-6 h-6" />
              {user?.displayName || "TechShop User"}
            </h2>
            <p className="text-gray-500 flex justify-center items-center gap-2 mt-1">
              <Mail className="w-5 h-5 text-purple-500" />
              {user?.email}
            </p>
          </div>

          

          <div className="text-center mt-10">
            <button
              onClick={() => auth.signOut()}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-md mx-auto transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

