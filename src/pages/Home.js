import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedHotels from "../components/FeaturedHotels";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Hotel Booking"
          subtitle="Book any Hotel at low price"
        >
          <Link to="/hotels" className="btn-primary">
            list Hotels
          </Link>
        </Banner>
      </Hero>
      <FeaturedHotels />
    </>
  );
};

export default home;
