import { motion } from "framer-motion";
import { FaSearchLocation } from "react-icons/fa";

export default function Tracking() {
  return (
    <section id="tracking" className="py-14 md:py-20 lg:py-24 bg-[#f6efe5]">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center px-4 sm:px-6">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Track Your Shipment
          </h2>

          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Easily track your parcel in real time. Enter your tracking number
            and get the latest delivery updates instantly.
          </p>

          {/* Tracking Box */}
          <div className="bg-white shadow-xl rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto md:mx-0">

            <div className="flex items-center gap-2 flex-1">
              <FaSearchLocation className="text-[#0F2A44] text-lg sm:text-xl" />

              <input
                type="text"
                placeholder="Enter Tracking Number"
                className="flex-1 outline-none px-2 py-2 sm:py-3 text-sm sm:text-base"
              />
            </div>

            <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:scale-105 transition">
              Track
            </button>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="flex justify-center"
>

          <img
  src="/images/tracking.png"
  alt="tracking"
  className="w-full max-w-[600px] mx-auto sm:w-[360px] md:w-[420px] lg:w-[520px] xl:w-[600px]"
/>

        </motion.div>

      </div>

    </section>
  );
}