import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function DeliveryMap() {
  return (
    <section className="bg-[#f6efe5] py-16 px-6">
      
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold uppercase tracking-widest">
          Find Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Access us easily
        </h2>
      </div>

      {/* Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        
        {/* Map */}
        <div className="w-full h-[700px]">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=San+Diego&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Contact Info */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Contact with us
          </h3>

          <div className="space-y-5 text-gray-600">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <p>2277 Lorem Ave, San Diego, CA 22553</p>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-orange-500 mt-1" />
              <p>
                Monday - Friday: 10 am - 10pm <br />
                Sunday: 11 am - 9pm
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-orange-500 mt-1" />
              <p>info@quriarbox.com</p>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-gray-400">
            <FaFacebookF className="cursor-pointer hover:text-orange-500" />
            <FaInstagram className="cursor-pointer hover:text-orange-500" />
            <FaTwitter className="cursor-pointer hover:text-orange-500" />
          </div>
        </div>
      </div>

      {/* Call Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center gap-3 text-lg shadow">
          <FaPhoneAlt />
          Call us to delivery 123-456789
        </button>
      </div>

    </section>
  );
}