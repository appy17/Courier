import { motion } from "framer-motion";

export default function WhyUs() {
  const features = [
    "Fast Delivery",
    "Secure Packaging",
    "24/7 Customer Support",
    "Real Time Tracking"
  ];

  return (
    <div className="py-20 bg-gray-50">
      <h2 className="text-center text-4xl font-bold mb-10">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-2 gap-6 px-20">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-white p-6 shadow rounded-lg"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}