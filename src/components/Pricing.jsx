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
    <div className="py-20 bg-[#f6efe5]">

      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
        Courier Pricing Plans
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 
            ${plan.highlight ? "border-4 border-orange-500" : ""}`}
          >

            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              {plan.name}
            </h3>

            <p className="text-4xl font-bold text-orange-600 mb-6">
              {plan.price}
            </p>

            <ul className="space-y-3 text-orange-600 dark:text-gray-300">

              {plan.features.map((item, i) => (
                <li key={i}>
                  ✔ {item}
                </li>
              ))}

            </ul>

            <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-700">
              Choose Plan
            </button>

          </motion.div>
        ))}

      </div>
    </div>
  );
}