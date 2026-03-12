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

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scroll, setScroll] = useState(false);

  const menu = ["Home","Services","Tracking","Pricing","About","Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[]);

  return (

    <nav className={`fixed w-full z-50 transition-all duration-300 
    ${scroll ? "bg-[#1f2033] shadow-lg py-3" : "bg-white/70 backdrop-blur-lg py-4"}`}>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6">

        {/* Logo */}
        <motion.div
          whileHover={{ scale:1.05 }}
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold"
        >
          <FaTruck className="text-orange-500"/>
          <span className="text-orange-500">FastCourier</span>
        </motion.div>


        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 font-medium text-gray-700">

          {menu.map((item,index)=>(
            <li
              key={index}
              onClick={()=>setActive(item)}
              className="relative cursor-pointer"
            >

              <span className={`${active===item ? "text-orange-500" : ""}`}>
                {item}
              </span>

              {active===item && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-orange-500"
                />
              )}

            </li>
          ))}

        </ul>


        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">

          {/* Tracking Search */}
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 w-40 xl:w-52">
            <FaSearch className="text-gray-400 mr-2"/>
            <input
              type="text"
              placeholder="Track Package"
              className="outline-none text-sm bg-transparent w-full"
            />
          </div>

          <button className="px-3 xl:px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition text-sm">
            Login
          </button>

          <button className="px-3 xl:px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm">
            Register
          </button>

        </div>


        {/* Mobile Menu Button */}
        <div
          className="lg:hidden cursor-pointer text-xl"
          onClick={()=>setOpen(!open)}
        >
          {open ? <FaTimes/> : <FaBars/>}
        </div>

      </div>


      {/* Mobile Menu */}
      {open && (

        <motion.div
          initial={{opacity:0,y:-20}}
          animate={{opacity:1,y:0}}
          className="lg:hidden bg-white shadow-lg"
        >

          <ul className="flex flex-col items-center gap-5 py-6 text-base font-medium">

            {menu.map((item,index)=>(
              <li
                key={index}
                onClick={()=>setOpen(false)}
                className="cursor-pointer hover:text-orange-500"
              >
                {item}
              </li>
            ))}

            {/* Mobile Tracking */}
            <div className="flex items-center border rounded-lg px-3 py-2 w-64">
              <FaSearch className="text-gray-400 mr-2"/>
              <input
                type="text"
                placeholder="Track Package"
                className="outline-none w-full"
              />
            </div>

            <button className="px-6 py-2 border border-orange-500 text-orange-500 rounded-lg w-40">
              Login
            </button>

            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg w-40">
              Register
            </button>

          </ul>

        </motion.div>

      )}

    </nav>
  );
}