import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, location, img, des } = testimonial;
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{des}</p>
        <div className="flex my-2 items-center">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="ml-4">
            <h2 class="card-title">{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
