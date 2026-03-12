import { motion } from "framer-motion";

export default function Pricing() {

  const plans = [
    {
      name: "Local Delivery",
      price: "₹99",
      features: [
        "Same City Delivery",
        "Delivery within 24 hours",
        "Package tracking",
        "Customer support"
      ]
    },
    {
      name: "National Shipping",
      price: "₹299",
      features: [
        "All India Delivery",
        "2-4 Days Delivery",
        "Real Time Tracking",
        "Insurance Included"
      ],
      highlight: true
    },
    {
      name: "International Shipping",
      price: "₹999",
      features: [
        "Worldwide Delivery",
        "7-10 Days Delivery",
        "Secure Packaging",
        "Priority Support"
      ]
    }
  ];

  return (
    <div className="py-14 md:py-20 bg-[#f6efe5]">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 dark:text-white px-4">
        Courier Pricing Plans
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`p-6 sm:p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 
            transition-all
            ${plan.highlight ? "border-4 border-orange-500" : ""}`}
          >

            {/* Plan Name */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 dark:text-white">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
              {plan.price}
            </p>

            {/* Features */}
            <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">

              {plan.features.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-orange-500">✔</span>
                  {item}
                </li>
              ))}

            </ul>

            {/* Button */}
            <button className="mt-6 w-full bg-orange-500 text-white py-2.5 sm:py-3 rounded-lg hover:bg-orange-700 transition">
              Choose Plan
            </button>

          </motion.div>
        ))}

      </div>

    </div>
  );
}