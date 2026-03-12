import { motion } from "framer-motion";
import { FaTrophy, FaMapMarkedAlt, FaUserTie, FaTruck, FaBriefcase } from "react-icons/fa";

export default function Stats() {

  const stats = [
    {
      icon: <FaTrophy />,
      number: "26+",
      label: "Awards won",
    },
    {
      icon: <FaMapMarkedAlt />,
      number: "65+",
      label: "States covered",
    },
    {
      icon: <FaUserTie />,
      number: "689K+",
      label: "Happy clients",
    },
    {
      icon: <FaTruck />,
      number: "130M+",
      label: "Goods delivered",
    },
    {
      icon: <FaBriefcase />,
      number: "130M+",
      label: "Business hours",
    },
  ];

  return (
    <section className="py-20 bg-[#f6efe5]" style={{
        backgroundImage:
         "url('/images/hero-header-bg.png')" 
      }}>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 text-center">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >

            {/* Icon */}
            <div className="text-3xl text-gray-700 mb-4">
              {item.icon}
            </div>

            {/* Number */}
            <h2 className="text-4xl font-bold text-orange-500">
              {item.number}
            </h2>

            {/* Label */}
            <p className="text-gray-700 mt-2 font-medium">
              {item.label}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}