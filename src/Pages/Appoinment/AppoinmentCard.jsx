import React from "react";

const AppoinmentCard = ({ service,setTreatment }) => {
  const handleTreatement = (treat) => {
    setTreatment(treat)
  }
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{service.name}</h2>
        <p>
          {service.slots.length} {service.slots.length > 1 ? "slots" : "slot"}{" "}
          available
        </p>
        <p>{service.slots[0]}</p>
        <div className="card-actions">
          <label onClick={()=> handleTreatement(service)} htmlFor="booking-modal" className="btn modal-button  bg-gradient-to-r from-secondary to-primary border-0">
            open modal
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentCard;
