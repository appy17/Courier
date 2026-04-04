import logo from "/images/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#1f2033] text-gray-300">

      {/* Newsletter Section */}
      <div id="newsletter" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Get an update every week
          </h2>

          <p className="text-gray-400 max-w-md text-sm sm:text-base">
            Fast. Secure Delivery You Can Trust
          </p>
        </div>

        {/* Right */}
        <div>
          <p className="text-white font-semibold mb-3 text-sm">
            SUBSCRIBE TO NEWSLETTER
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 bg-transparent border border-gray-500 px-4 py-3 rounded-lg outline-none text-sm"
            />

            <button className="bg-white hover:bg-[#2f4c71] px-6 py-3 rounded-lg text-black hover:text-white font-medium text-sm transition">
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
            <img
              src={logo}
              alt="Logo"
              className="h-12 md:h-16 mb-4"
            />
            <p className="text-gray-400 text-sm">
              The most trusted Courier company in your area.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#tracking" className="hover:text-white">Tracking</a></li>
            </ul>
          </div>


          {/* More */}
          <div>
            <h3 className="text-white font-semibold mb-4">More</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#deliverymap" className="hover:text-white">Live Map</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>


          {/* Customer Care */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="hover:text-white">Help Center</a></li>
              <li><a href="#newsletter" className="hover:text-white">Get Updates</a></li>
              <li>
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Traffic Update
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>


      {/* Bottom */}
      <div className="border-t border-gray-700 py-5 text-center text-gray-400 text-sm">
        © 2026 NGR Transportation LLC. All Rights Reserved.
      </div>

    </footer>
  );
}