import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function AuthPage() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-50 relative">

      {/* 🔙 Fixed Back Button (Top Left - Mobile Style) */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-5 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-[#0F2A44] hover:text-white transition"
      >
        <FaArrowLeft />
      </button>

      {/* Left Side Illustration */}
      <div className="hidden md:flex items-center justify-center bg-orange-100 relative overflow-hidden">

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1048/1048315.png"
            alt="delivery"
            className="w-[300px]"
          />
        </motion.div>

        <div className="absolute bottom-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Fast & Reliable Delivery
          </h2>
          <p className="text-gray-600 mt-2">
            Track, send and receive packages easily
          </p>
        </div>

      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
        >

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {login ? "Login" : "Create Account"}
          </h2>

          <form className="space-y-4">

            {!login && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#0F2A44]"
              />
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#0F2A44]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#0F2A44]"
            />

            {!login && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#0F2A44]"
              />
            )}

            <button
              type="submit"
              className="w-full bg-[#0F2A44] hover:bg-[#2f4c71] text-white py-3 rounded-lg font-semibold transition"
            >
              {login ? "Login" : "Register"}
            </button>

          </form>

          {/* Toggle */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            {login ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={() => setLogin(!login)}
              className="ml-2 text-[#0F2A44] font-semibold cursor-pointer"
            >
              {login ? "Register" : "Login"}
            </span>
          </p>

        </motion.div>

      </div>

    </div>
  );
}