import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, des } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{title}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
