import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import { memo } from "react";

const Hotel = memo(({ hotel, startDate, endDate }) => {
  const { name, slug, images, price } = hotel;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single hotel" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link
          to={`/hotels/${slug}/${startDate}/${endDate}`}
          className="btn-primary room-link"
        >
          VISIT
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});
export default Hotel;
