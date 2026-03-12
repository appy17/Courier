import { motion } from "framer-motion";
import { FaDollarSign, FaCogs, FaUndo, FaShieldAlt, FaNetworkWired, FaBoxOpen } from "react-icons/fa";

export default function Services() {

  const services = [
    {
      icon: <FaDollarSign size={28} />,
      title: "Cost-Effective, Flexible Shipping",
      desc: "We offer the shipping speed and reliability you need to exceed your customers’ expectations without exceeding your budget."
    },
    {
      icon: <FaCogs size={28} />,
      title: "The Right Technology for the Task",
      desc: "Stay agile with integrated technology tools designed to optimize your supply chain management and e-commerce capabilities."
    },
    {
      icon: <FaUndo size={28} />,
      title: "The Right Returns Resources",
      desc: "Create an exceptional, cost-efficient returns process to keep customers coming back."
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "Peace of Mind, Package Protection",
      desc: "Insurance, coverage and claims are centralized to help protect you from loss, damage and porch pirates."
    },
    {
      icon: <FaNetworkWired size={28} />,
      title: "Connect Your Network & Data",
      desc: "Boost efficiency and reduce errors by integrating disconnected and time-consuming processes."
    },
    {
      icon: <FaBoxOpen size={28} />,
      title: "Packaging, Handling & Pickups",
      desc: "Whether you need premium packaging, customized handling or multiple pickups, we can help."
    }
  ];

  return (
    <section className="py-24 bg-[#f6efe5]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Why Choose UPS for All Your Operational Needs?
          </h2>

          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>

          <p className="max-w-2xl mx-auto text-gray-600">
            Our industry expertise and reliable resources are designed to bring real-time visibility
            and next-level efficiency across your business.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition"
            >

              <div className="text-yellow-600 mb-5 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}