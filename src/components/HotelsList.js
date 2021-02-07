import React from "react";
import Hotel from "./Hotel";
const HotelsList = ({ hotels,  startDate, endDate }) => {
  if (hotels && hotels.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no hotels matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {hotels &&
          hotels.map((item) => {
            return (
              <Hotel
                key={item._id}
                hotel={item}
                startDate={startDate}
                endDate={endDate}
              />
            );
          })}
      </div>
    </section>
  );
};

export default HotelsList;
