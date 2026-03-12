import { FaCube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f2033] text-gray-300">

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Get an update every week
          </h2>

          <p className="text-gray-400 max-w-md text-sm sm:text-base">
            We ensure that your product is delivered in the safest possible
            manner, at the correct location, at the right time.
          </p>
        </div>

        {/* Right */}
        <div>
          <p className="text-orange-500 font-semibold mb-3 text-sm">
            SUBSCRIBE TO NEWSLETTER
          </p>

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 bg-transparent border border-gray-500 px-4 py-3 rounded-lg outline-none text-sm"
            />

            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white font-medium text-sm">
              Subscribe
            </button>

          </div>

        </div>

      </div>


      {/* Main Footer */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Logo */}
          <div className="col-span-2 md:col-span-1">

            <div className="flex items-center gap-2 text-white text-lg sm:text-xl font-bold mb-4">
              <FaCube className="text-orange-500" />
              FastCourier
            </div>

            <p className="text-gray-400 text-sm">
              The most trusted Courier company in your area.
            </p>

          </div>


          {/* Other Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Other links
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Blogs</li>
              <li className="hover:text-white cursor-pointer">Movers website</li>
              <li className="hover:text-white cursor-pointer">Traffic Update</li>
            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Services
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Corporate goods</li>
              <li className="hover:text-white cursor-pointer">Artworks</li>
              <li className="hover:text-white cursor-pointer">Documents</li>
            </ul>
          </div>


          {/* Customer Care */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Customer Care
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Get Update</li>
            </ul>
          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-5 text-center text-gray-400 text-sm">
        © 2026 FastCourier. All Rights Reserved.
      </div>

    </footer>
  );
}