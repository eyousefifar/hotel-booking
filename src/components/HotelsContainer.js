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
    const city = e.target.value;
    setCity(city);
    await search({newCity: city });
  }
  async function changePrice(e) {
    const price =e.target.value 
    setPrice(price);
    await search({newPrice: price});
  }
  async function changeMin(e) {
    const min = e.target.value;
    setMinSize(min);
    await search({newMin: min});
  }
  async function changeMax(e) {
    const max = e.target.value;
    setMaxSize(max);
    await search({newMax: max});
  }
  async function changeStartDate(data) {
    setStartDate(data);
    await search({newStart: data});
  }
  async function changeEndDate(data) {
    setEndDate(data);
    await search({newEnd: data});
  }
  async function search({newCity, newStart, newEnd, newMin, newMax, newPrice}) {
    const past = 1412551100952;
    const future = 1812551100952;
    let start_date;
    let end_date;
    if(newStart) {
      start_date = new Date(newStart).getTime();
    }
    if(newEnd) {
      end_date = new Date(newEnd).getTime();
    }
    let start;
    let end;
    if(startDate) {
     start = start_date ? start_date : new Date(startDate).getTime(); 
    }
    if(endDate) {
      end = end_date ? end_date : new Date(endDate).getTime(); 
    }
    start = start ? start : past;
    end = end ? end : future
    // const start = !start_date ? past : new Date(startDate).getTime();
    // const end = !endDate ? future : new Date(endDate).getTime();
    const new_city = newCity ? newCity : city;
    const new_min = newMin ? newMin : minSize;
    const new_max = newMax ? newMax : maxSize;
    const new_price = newPrice ? newPrice : price;
    const resp = await fetch(
      `http://localhost:3001/search?city=${new_city}&start_date=${start}&end_date=${end}&min_size=${new_min}&max_size=${new_max}&max_price=${new_price}`
    );
    if (resp.ok) {
      const data = await resp.json();

      setHotels(data);
    } else {
      setHotels([]);
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
