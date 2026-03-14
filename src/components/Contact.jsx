import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact"
      className="py-14 md:py-20 lg:py-24 bg-[#f6efe5] bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/hero-header-bg.png')"
      }}
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center px-4 sm:px-6">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >

          <img
            src="/images/callback.png"
            alt="contact"
            className="w-40 sm:w-56 md:w-72 mx-auto md:mx-0 mb-6"
          />

          <p className="text-orange-500 font-bold tracking-wide mb-3 text-sm sm:text-base">
            REQUEST A CALLBACK
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            We will contact in the shortest time.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Monday to Friday, 9am–5pm.
          </p>

        </motion.div>


        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 sm:space-y-5"
        >

          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 bg-transparent focus:outline-none focus:border-orange-400 text-sm sm:text-base"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 bg-transparent focus:outline-none focus:border-orange-400 text-sm sm:text-base"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 bg-transparent focus:outline-none focus:border-orange-400 text-sm sm:text-base"
          ></textarea>

          <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition shadow-md w-full sm:w-auto">
            Send Message <FaPaperPlane />
          </button>

        </motion.div>

      </div>

    </section>
  );
}