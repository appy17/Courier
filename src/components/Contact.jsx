import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "9403575320"; // 👉 your WhatsApp number (with country code, no +)

    const text = `Hello, I have a query:
    
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(url, "_blank");
  };
  return (
    <section
      id="contact"
      className="py-14 md:py-20 lg:py-24 bg-[#f6efe5] bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/hero-header-bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center px-4 sm:px-6">
        {/* LEFT SIDE */}
        <motion.div
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center md:text-left"
>
          <img
            src="/images/callback.png"
            alt="contact"
            className="w-40 sm:w-56 md:w-72 mx-auto md:mx-0 mb-6"
          />

          <p className="text-[#0F2A44] font-bold tracking-wide mb-3 text-sm sm:text-base">
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
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 sm:space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 bg-transparent focus:outline-none focus:border-orange-400 text-sm sm:text-base"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 bg-transparent focus:outline-none focus:border-orange-400 text-sm sm:text-base"
          />
          <input
            type="number"
            name="number"
            placeholder="phone number"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 bg-transparent focus:outline-none focus:border-orange-400 text-sm sm:text-base"
          />
          <textarea
            name="message"
            onChange={handleChange}
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 bg-transparent focus:outline-none focus:border-orange-400 text-sm sm:text-base"
          ></textarea>

          <button
            onClick={sendToWhatsApp}
            className="bg-[#0F2A44] text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            Send Message <FaPaperPlane />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
