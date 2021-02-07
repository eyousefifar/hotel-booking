import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import HotelsFilter from "./HotelsFilter";
import HotelsList from "./HotelsList";

function HotelsContainer() {
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState(undefined);
  const [cities, setCities] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(1000);
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [price, setPrice] = useState(1100);
  async function changeCity(e) {
    setCity(e.target.value);
    await search();
  }
  async function changePrice(e) {
    setPrice(e.target.value);
    await search();
  }
  async function changeMin(e) {
    setMinSize(e.target.value);
    await search();
  }
  async function changeMax(e) {
    setMaxSize(e.target.value);
    await search();
  }
  async function changeStartDate(data) {
    setStartDate(data);
    await search();
  }
  async function changeEndDate(data) {
    setEndDate(data);
    await search();
  }
  async function search() {
    const past = 1412551100952;
    const future = 1812551100952;
    const start_date = !startDate ? past : new Date(startDate).getTime();
    const end_date = !endDate ? future : new Date(endDate).getTime();
    const resp = await fetch(
      `http://localhost:3001/search?city=${city}&start_date=${start_date}&end_date=${end_date}&min_size=${minSize}&max_size=${maxSize}&max_price=${price}`
    );
    if (resp.ok) {
      const data = await resp.json();

      setHotels(data);
    } else {
    }
  }
  useEffect(() => {
    async function fetchCities() {
      const resp = await fetch("http://localhost:3001/cities");
      let cities_data;
      if (resp.ok) {
        cities_data = await resp.json();
        setCities(cities_data);
        setCity(cities_data[0]);
      }
      const past = 1412551100952;
      const future = 1812551100952;
      const res = await fetch(
        `http://localhost:3001/search?city=${
          cities_data[0]
        }&start_date=${past}&end_date=${future}&min_size=${0}&max_size=${1000}&max_price=${1100}`
      );
      if (res.ok) {
        const data = await res.json();
        setHotels(data);
        setLoading(false);
      }
    }
    fetchCities();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <HotelsFilter
        cities={cities}
        setCity={changeCity}
        setPrice={changePrice}
        city={city}
        maxSize={maxSize}
        minSize={minSize}
        price={price}
        startDate={startDate}
        endDate={endDate}
        setStartDate={changeStartDate}
        setEndDate={changeEndDate}
        setMaxSize={changeMax}
        setMinSize={changeMin}
      />
      <HotelsList
        hotels={hotels}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
}

export default HotelsContainer;
