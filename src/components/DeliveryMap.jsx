import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

export default function DeliveryMap() {
  return (
    <section className="bg-[#f6efe5] py-12 md:py-16 px-4 sm:px-6">

      {/* Header */}
      <div className="text-center mb-10 md:mb-12">
        <p className="text-[#0F2A44] font-semibold uppercase tracking-widest text-sm">
          Find Us
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Access us easily
        </h2>
      </div>


      {/* Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* Map */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-auto">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=California,USA&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>


        {/* Contact Info */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">

          <h3 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
            Contact with us
          </h3>

          <div className="space-y-4 sm:space-y-5 text-gray-600 text-sm sm:text-base">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#0F2A44] mt-1" />
              <p>California, USA</p>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#0F2A44] mt-1" />
              <p>
                Monday - Friday: 10 am - 10pm <br />
                Sunday: 11 am - 9pm
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#0F2A44] mt-1" />
              <p>ssadiqullah.wahidi@gmail.com</p>
            </div>

          </div>


          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-gray-400 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-[#2f4c71] transition" />
            <FaInstagram className="cursor-pointer hover:text-[#2f4c71] transition" />
            <FaTwitter className="cursor-pointer hover:text-[#2f4c71] transition" />
          </div>

        </div>

      </div>


      {/* Call Button */}
      <div className="flex justify-center mt-8 md:mt-10">

        <button className="bg-[#0F2A44] hover:bg-[#2f4c71] text-white px-6 sm:px-8 py-3 rounded-lg flex items-center gap-3 text-sm sm:text-lg shadow transition">

          <FaPhoneAlt />

          <span className=" sm:inline">
            Call us to delivery (916) 846-1985
          </span>

          

        </button>

      </div>

    </section>
  );
}