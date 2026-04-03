// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaBars, FaTimes, FaTruck, FaSearch } from "react-icons/fa";

// export default function Navbar() {

//   const [open, setOpen] = useState(false);

//   const menu = ["Home","Services","Tracking","Pricing","About","Contact"];

//   return (
//     <nav className="fixed w-full z-50 bg-white shadow-md">

//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* Logo */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center gap-2 text-2xl font-bold"
//         >
//           <FaTruck className="text-orange-500"/>
//           <span className="text-orange-500">
//             FastCourier
//           </span>
//         </motion.div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 font-medium text-gray-700">

//           {menu.map((item,index)=>(
//             <motion.li
//               key={index}
//               whileHover={{ scale:1.1 }}
//               className="cursor-pointer hover:text-orange-500 transition"
//             >
//               {item}
//             </motion.li>
//           ))}

//         </ul>

//         {/* Right Section */}
//         <div className="hidden md:flex items-center gap-4">

//           {/* Search Bar */}
//           <div className="flex items-center border rounded-lg px-3 py-2">
//             <FaSearch className="text-gray-400 mr-2"/>
//             <input
//               type="text"
//               placeholder="Search"
//               className="outline-none text-sm"
//             />
//           </div>

//           {/* Login Button */}
//           <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition">
//             Login
//           </button>

//           {/* Register Button */}
//           <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
//             Register
//           </button>

//         </div>

//         {/* Mobile Menu Button */}
//         <div
//           className="md:hidden cursor-pointer text-xl"
//           onClick={()=>setOpen(!open)}
//         >
//           {open ? <FaTimes/> : <FaBars/>}
//         </div>

//       </div>

//       {/* Mobile Menu */}

//       {open && (

//         <motion.div
//           initial={{opacity:0, y:-30}}
//           animate={{opacity:1, y:0}}
//           transition={{duration:0.3}}
//           className="md:hidden bg-white shadow-xl"
//         >

//           <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-gray-700">

//             {menu.map((item,index)=>(
//               <motion.li
//                 key={index}
//                 whileHover={{scale:1.1}}
//                 className="cursor-pointer hover:text-orange-500"
//               >
//                 {item}
//               </motion.li>
//             ))}

//             {/* Mobile Buttons */}

//             <button className="px-6 py-2 border border-orange-500 text-orange-500 rounded-lg">
//               Login
//             </button>

//             <button className="px-6 py-2 bg-orange-500 text-white rounded-lg">
//               Register
//             </button>

//           </ul>

//         </motion.div>

//       )}

//     </nav>
//   );
// }
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaTruck, FaSearch } from "react-icons/fa";
import logo from "/images/WhatsApp Image 2026-04-03 at 11.59.02 AM.png"

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
      className={`fixed w-full z-50 transition-all duration-300 
    ${scroll ? "bg-[#f6efe5] text-black shadow-lg  " : "bg-white/80 backdrop-blur-lg "}`}
    >
      <div className="max-w-8xl mx-auto flex justify-between md:h-20 items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl md:text-2xl font-bold">
         

          <img
            src={logo}
            alt="FastCourier Logo"
            className="h-15 md:h-30 w-auto object-contain"
          />
        </div>

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

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 w-48">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Track Package"
              className="outline-none text-sm bg-transparent w-full"
            />
          </div>

          <a
            href="/login"
            className="px-4 py-2 bg-[#0F2A44] text-white rounded-lg hover:bg-[#2f4c71] transition inline-block"
          >
            Login
          </a>

          <a
            href="/login"
            className="px-4 py-2 bg-[#0F2A44] text-white rounded-lg hover:bg-[#2f4c71] transition inline-block"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
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
        className="lg:hidden fixed top-[64px] left-0 w-full bg-white shadow-lg"
      >
        <div className="px-6 py-6">
          {/* Menu Links */}
          <ul className="flex flex-col gap-6 text-lg font-medium text-gray-800">
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block border-b pb-2 hover:text-orange-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Tracking Input */}
          <div className="flex items-center border rounded-lg px-3 py-2 mt-6">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Track Package"
              className="outline-none w-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="/login"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition inline-block"
            >
              Login
            </a>

            <a
              href="/login"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition inline-block"
            >
              Register
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
