import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      text: "Excellent courier service! My package arrived safely and on time.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Verma",
      role: "Ecommerce Seller",
      text: "Fast delivery and real-time tracking helped my business grow.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Amit Patel",
      role: "Startup Founder",
      text: "Reliable logistics partner. Their service is very professional.",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      name: "Sneha Kapoor",
      role: "Online Store Owner",
      text: "Packaging and delivery were excellent. My customers are happy.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Arjun Singh",
      role: "Entrepreneur",
      text: "Best courier service I have used. Super fast shipping!",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-14 md:py-20 lg:py-24 bg-[#f6efe5]">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 px-4">
        What Our Customers Say
      </h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}

          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >

          {testimonials.map((item, index) => (

            <SwiperSlide key={index}>

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center h-full">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full mb-4"
                />

                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  "{item.text}"
                </p>

                <h3 className="font-semibold text-base sm:text-lg">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  {item.role}
                </p>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}