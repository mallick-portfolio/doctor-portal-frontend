import React from "react";
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/marker.svg";
const HomeContact = () => {
  return (
    <div className="my-28 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="card card-side text-white bg-gradient-to-r from-secondary to-primary shadow-xl lg:px-5 lg:py-2">
        <figure>
          <img src={clock} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div className="card bg-neutral text-white  card-side shadow-xl lg:px-5 lg:py-2">
        <figure>
          <img src={location} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Visit our location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className="card card-side  text-white bg-gradient-to-r from-secondary to-primary bg-base-100 shadow-xl lg:px-5 lg:py-2">
        <figure>
          <img src={phone} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Contact us now</h2>
          <p>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
