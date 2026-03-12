import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#f6f2ea] overflow-hidden">

      <div className="w-[300px] relative">

        <motion.div
          animate={{ x: [120, -120] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-5xl"
        >
          🚚
        </motion.div>

        <div className="mt-6 text-center text-gray-700 font-medium">
          Delivering your experience...
        </div>

      </div>

    </div>
  );
}