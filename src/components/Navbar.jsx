import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/images/WhatsApp Image 2026-04-03 at 11.59.02 AM.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "#services" },
    { name: "Services", link: "#pricing" },
    { name: "Tracking", link: "#tracking" },
    // { name: "Pricing", link: "#pricing" },
    
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scroll ? "bg-[#f6efe5] shadow-md" : "bg-white/80 backdrop-blur-lg"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20 md:h-24 px-4">
          
          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="h-20 md:h-32 w-auto object-contain"
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 font-medium">
            {menu.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:text-[#2f4c71] transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 w-44">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Track Package"
                className="outline-none text-sm bg-transparent w-full"
              />
            </div>

            <Link
              to="/login"
              className="px-4 py-2 bg-[#0F2A44] text-white rounded-lg hover:bg-[#2f4c71]"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2  bg-[#0F2A44] text-white border border-[#0F2A44]  rounded-lg hover:bg-[#2f4c71] hover:text-white"
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center text-xl">
            <button onClick={() => setOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: open ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-[75%] max-w-xs h-full bg-white z-50 shadow-xl lg:hidden"
      >
        <div className="p-5 flex flex-col h-full">
          
          {/* Top */}
          <div className="flex justify-between items-center mb-6">
            <img src={logo} alt="logo" className="h-10" />
            <button onClick={() => setOpen(false)}>
              <FaTimes size={20} />
            </button>
          </div>

          {/* Menu */}
          <ul className="flex flex-col gap-5 text-lg font-medium">
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block border-b pb-2 hover:text-[#2f4c71]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Search */}
          <div className="flex items-center border rounded-lg px-3 py-2 mt-6">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Track Package"
              className="outline-none w-full"
            />
          </div>

          {/* Bottom Buttons */}
          <div className="mt-auto flex flex-col gap-3 pt-6">
            <Link
              to="/login"
              className="w-full text-center px-4 py-3 bg-[#0F2A44] text-white rounded-lg"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="w-full text-center px-4 py-3 border border-[#0F2A44] text-[#0F2A44] rounded-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}