import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Tracking from "../components/Tracking";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import DeliveryMap from "../components/DeliveryMap";
import Pricing from "../components/Pricing";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Stats />
      <Tracking />
      <DeliveryMap />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
