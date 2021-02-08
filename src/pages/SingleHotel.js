import React, { useState, useEffect } from "react";
import defaultBcgImg from "../images/room-1.jpeg";
import Loading from "../components/Loading";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import StyledHero from "../components/StyledHero";

export default function SingleHotel({ match }) {
  const slug = match.params.slug;
  const startDate = match.params.startDate !== "undefined" ? new Date(match.params.startDate): undefined;
  const endDate = match.params.endDate !== "undefined" ? !new Date(match.params.endDate): undefined;;
  const defaultBcg = defaultBcgImg;
  const [hotel, sethotel] = useState(undefined);
  const [loading, setloading] = useState(true);
  /** form state */
  const [validation, setValidation] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    rooms: undefined,
    arrival: undefined,
    departure: undefined,
  });
  const [form, setForm] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    rooms: undefined,
    arrival: startDate,
    departure: endDate,
  });

  function changeFName(e) {
    const firstName = e.target.value;
    setForm({
      ...form,
      firstName,
    });
  }
  function changeLName(e) {
    const lastName = e.target.value;
    setForm({
      ...form,
      lastName,
    });
  }
  function changeEmail(e) {
    const email = e.target.value;
    setForm({
      ...form,
      email,
    });
  }
  function changePhone(e) {
    const phone = e.target.value;
    setForm({
      ...form,
      phone,
    });
  }
  function changeRooms(e) {
    const rooms = e.target.value;

    setForm({
      ...form,
      rooms,
    });
  }
  function changeArrival(arrival) {
    setForm({
      ...form,
      arrival,
    });
  }
  function changeDeparture(departure) {
    setForm({
      ...form,
      departure,
    });
  }
  function validate() {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const phoneRegex = new RegExp(/^(0047|\+47|47)?[2-9]\d{7}$/);
    const checkName =
      typeof form.firstName === "string" && form.firstName.length > 2;
    const checkLastName =
      typeof form.lastName === "string" && form.lastName.length > 3;
    const checkEmail =
      typeof form.email === "string" && emailRegex.test(form.email);
    const checkPhone =
      typeof form.phone === "string" && phoneRegex.test(form.phone);
    const checkRooms =
      typeof form.rooms === "string" && parseInt(form.rooms) >= 1;
    const checkArrival = typeof form.arrival !== "undefined";
    const checkDeparture = typeof form.departure !== "undefined";
    setValidation({
      firstName: checkName ? undefined : "name is required",
      lastName: checkLastName ? undefined : "last name is required",
      email: checkEmail ? undefined : "email is required",
      phone: checkPhone ? undefined : "phone is required",
      rooms: checkRooms ? undefined : "pick at least one room",
      arrival: checkArrival ? undefined : "arrival date is required",
      departure: checkDeparture ? undefined : "departure date is required",
    });
    return (
      checkName &&
      checkLastName &&
      checkEmail &&
      checkPhone &&
      checkRooms &&
      checkArrival &&
      checkDeparture
    );
  }
  const [booking, setBooking] = useState("Book now");
  async function onBookingPress(e) {
    if (validate()) {
      setBooking("Booking...")
      const resp = await fetch("http://localhost:3001/book-hotel", {
        method: "POST",
        body:{
          id: _id,
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          rooms: form.rooms,
          arrival: form.arrival,
          departure: form.departure
        }
      });
      if(resp.ok) {
        const data = await resp.json();
        if(data.success) {
          setBooking("done")
        } else {
          setBooking("Error");
        }
      } else {
        setBooking("Error")
      }
    }
  }
  /** form state */
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/hotel/${slug}`);
      if (response.status === 404) {
        sethotel("not-found");
        setloading(false);
      }
      if (response.ok) {
        const data = await response.json();

        sethotel(data);
        setloading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (hotel === "not-found") {
    return (
      <div className="error">
        <h3> no such hotel could be found...</h3>
        <Link to="/hotels" className="btn-primary">
          back to hotels
        </Link>
      </div>
    );
  }
  const {
    _id,
    name,
    description,
    rooms,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = hotel;
  const single_images = [images[1], images[2], images[3]];
  return (
    <>
      <StyledHero img={images[0] || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/hotels" className="btn-primary">
            back to hotels
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {single_images.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>rooms : {rooms}</h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras </h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
      <section className="room-extras">
        <h3>Book now</h3>
        <div className="filter-form">
          <form className="form-group">
            <label htmlFor="name">
              name{" "}
              <p style={{ color: "red", fontSize: "10px" }}>
                {validation.firstName}
              </p>
            </label>

            <input name="name" id="name" type="text" onChange={changeFName} />
          </form>
          <form className="form-group">
            <label htmlFor="lastName">
              last name
              <p style={{ color: "red", fontSize: "10px" }}>
                {validation.lastName}
              </p>
            </label>

            <input
              name="lastName"
              id="lastName"
              type="text"
              onChange={changeLName}
            />
          </form>
          <form className="form-group">
            <label htmlFor="email">
              email
              <p style={{ color: "red", fontSize: "10px" }}>
                {validation.email}
              </p>
            </label>

            <input
              name="email"
              id="email"
              type="email"
              onChange={changeEmail}
            />
          </form>
          <form className="form-group">
            <label htmlFor="phone">
              phone
              <p style={{ color: "red", fontSize: "10px" }}>
                {validation.phone}
              </p>
            </label>

            <input name="phone" id="phone" type="text" onChange={changePhone} />
          </form>
          <form className="form-group">
            <label htmlFor="rooms">
              rooms:{" "}
              <p style={{ color: "red", fontSize: "10px" }}>
                {validation.rooms}
              </p>
            </label>

            <input
              name="rooms"
              id="rooms"
              min={1}
              max={1100}
              type="number"
              onChange={changeRooms}
            />
          </form>
          <br />
        </div>
        <div className="filter-form">
          <form className="form-group">
            <label htmlFor="arrival">
              arrival date
              <p style={{ color: "red", fontSize: "10px" }}>
                {validation.arrival}
              </p>
            </label>

            <DatePicker selected={form.arrival} onChange={changeArrival} />
          </form>
          <form className="form-group">
            <label htmlFor="departure">
              departure date{" "}
              <p style={{ color: "red", fontSize: "10px" }}>
                {validation.departure}
              </p>
            </label>

            <DatePicker selected={form.departure} onChange={changeDeparture} />
          </form>
          <div className="form-group">
            {/* <label htmlFor="button">submit</label> */}
            <br />
            <button className="form-button" onClick={onBookingPress}>
              {booking}
            </button>
          </div>
          <div className="form-group" />
          <div className="form-group" />
        </div>
        <br />
        <br />
      </section>
    </>
  );
}
