import React from "react";
import CommonBtn from "../Shared/CommonBtn.jsx";

const AppoinmentCard = ({ service }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>
          {service.slots.length} {service.slots.length > 1 ? "slots" : "slot"}{" "}
          available
        </p>
        <div class="card-actions">
          <CommonBtn>Book Appointment</CommonBtn>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentCard;
