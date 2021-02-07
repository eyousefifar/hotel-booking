import React, { useState, useEffect } from "react";
import Title from "./Title";
import Hotel from "./Hotel";
import Loading from "./Loading";


export default function FeaturedHotels() {
  const [hotels, setHotels] = useState(undefined);
  useEffect(() => {
    async function fetchData() {
    const response = await fetch("http://localhost:3001/featured");
    const data = await response.json();
    setHotels(data);
    }
    fetchData()
  }, [])
  const hotelComponents = hotels ? hotels.map(hotel => {
    return <Hotel key={hotel._id} hotel={hotel} />
  }) : undefined
  return (
    <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {!hotelComponents ? <Loading /> : hotelComponents}
        </div>
      </section>
  )
}