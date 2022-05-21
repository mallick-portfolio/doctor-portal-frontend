import React from "react";

const AppoinmentCard = ({ service,setTreatment }) => {
  const handleTreatement = (treat) => {
    setTreatment(treat)
  }
  
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{service.name}</h2>
        <p>
          {service.slots.length} {service.slots.length > 1 ? "slots" : "slot"}{" "}
          available
        </p>
        <p>{service.slots[0]}</p>
        <div class="card-actions">
          <label onClick={()=> handleTreatement(service)} for="booking-modal" class="btn modal-button  bg-gradient-to-r from-secondary to-primary border-0">
            open modal
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentCard;
