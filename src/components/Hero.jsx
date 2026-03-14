import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#ddb972] pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-header-bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
            A trusted provider of
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            courier services.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md mx-auto md:mx-0">
            We deliver your products safely to your home in a reasonable time.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition mx-auto md:mx-0">
            Get started →
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/images/hero.png"
            alt="courier"
            className="w-full max-w-[520px]"
          />
        </motion.div>

      </div>
    </section>
  );
}