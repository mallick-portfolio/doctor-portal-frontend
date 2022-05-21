import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentCard from "./AppoinmentCard.jsx";
import BookingModal from "./BookingModal.jsx";

const AvailableAppoinment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null)
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="my-28">
      <div className="text-center mb-10">
        <h1 className="text-2xl text-secondary">
          Available Services on April {format(date, "PP")}
        </h1>
        <h3 className="text-xl">Please select a service.</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AppoinmentCard setTreatment={setTreatment} key={service._id} service={service} />
        ))}
      </div>
      <BookingModal treatment={treatment} setTreatment={setTreatment} date={date} />
    </div>
  );
};

export default AvailableAppoinment;
