import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Title from "./Title";

const HotelsFilter = ({
  cities,
  city,
  setCity,
  price,
  setPrice,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  minSize,
  setMinSize,
  maxSize,
  setMaxSize,
}) => {
  return (
    <section className="filter-container">
      <Title title="search Hotels" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            name="city"
            id="city"
            onChange={setCity}
            className="form-control"
            value={city}
          >
            {cities.map((item) => {
              return <option key={item} value={item}>{item}</option>;
            })}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">date range</label>
          <DatePicker selected={startDate} onChange={setStartDate}  />
        </div>
        <div className="form-group">
          <label htmlFor="capacity">date range</label>
          <DatePicker selected={endDate} onChange={setEndDate} />
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={0}
            max={1100}
            id="price"
            value={price}
            onChange={setPrice}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={setMinSize}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={setMaxSize}
              className="size-input"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default HotelsFilter;
