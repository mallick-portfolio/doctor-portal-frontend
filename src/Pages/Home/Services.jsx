import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard.jsx";
const services = [
  {
    _id: 1,
    title: "Fluoride Treatment",
    des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: fluoride,
  },
  {
    _id: 2,
    title: "Cavity Filling",
    des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: cavity,
  },
  {
    _id: 3,
    title: "Teeth Whitening",
    des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: whitening,
  },
];
const Services = () => {
  return (
    <div className="my-28 lg:px-16 mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-2xl text-secondary">OUR SERVICES</h1>
        <h3 className="text-4xl">Services We Provide</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
