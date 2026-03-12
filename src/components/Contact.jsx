import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 bg-[#f6efe5]" style={{
        backgroundImage:
         "url('/images/hero-header-bg.png')" ,
      }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/callback.png"
            alt="contact"
            className="w-72 mb-6"
          />

          <p className="text-orange-500 font-bold tracking-wide mb-3">
            REQUEST A CALLBACK
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            We will contact in the shortest time.
          </h2>

          <p className="text-gray-600">
            Monday to Friday, 9am–5pm.
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-lg p-4 bg-transparent focus:outline-none focus:border-orange-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-4 bg-transparent focus:outline-none focus:border-orange-400"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-lg p-4 bg-transparent focus:outline-none focus:border-orange-400"
          ></textarea>

          <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition shadow-md">
            Send Message <FaPaperPlane />
          </button>

        </motion.div>

      </div>
    </section>
  );
}