import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import HotelsContainer from "../components/HotelsContainer";
const Hotels = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our Hotels">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <HotelsContainer />
    </>
  );
};

export default Hotels;
