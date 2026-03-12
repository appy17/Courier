import { motion } from "framer-motion";
import { FaSearchLocation } from "react-icons/fa";

export default function Tracking() {
  return (
    <section className="py-24 bg-[#f6efe5]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Track Your Shipment
          </h2>

          <p className="text-gray-600 mb-8">
            Easily track your parcel in real time. Enter your tracking number
            and get the latest delivery updates instantly.
          </p>

          {/* Tracking Box */}
          <div className="bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3 max-w-md">
            <FaSearchLocation className="text-orange-500 text-xl" />

            <input
              type="text"
              placeholder="Enter Tracking Number"
              className="flex-1 outline-none px-2 py-3"
            />

            <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
              Track
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/tracking.png"
            alt="tracking"
            className="w-[600px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
