import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logo from "/images/WhatsApp Image 2026-04-03 at 11.59.02 AM.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "Services", link: "#services" },
    { name: "Tracking", link: "#tracking" },
    { name: "Pricing", link: "#pricing" },
    { name: "About", link: "#about" },
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scroll ? "bg-[#f6efe5] shadow-md " : "bg-white/80 backdrop-blur-lg"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 md:h-25 px-4">
        
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="h-20 md:h-50 w-auto object-contain mt-5"
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

          <a
            href="/login"
            className="px-4 py-2 bg-[#0F2A44] text-white rounded-lg hover:bg-[#2f4c71]"
          >
            Login
          </a>

          <a
            href="/register"
            className="px-4 py-2 border border-[#0F2A44] text-[#0F2A44] rounded-lg hover:bg-[#0F2A44] hover:text-white"
          >
            Register
          </a>
        </div>

        {/* Mobile Toggle */}
        <div
          className="lg:hidden text-xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: open ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed top-16 left-0 w-full h-screen bg-white shadow-lg overflow-y-auto"
      >
        <div className="px-5 py-6 space-y-6">
          
          {/* Links */}
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
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Track Package"
              className="outline-none w-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="/login"
              className="w-full text-center px-4 py-3 bg-[#0F2A44] text-white rounded-lg"
            >
              Login
            </a>

            <a
              href="/register"
              className="w-full text-center px-4 py-3 border border-[#0F2A44] text-[#0F2A44] rounded-lg"
            >
              Register
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}