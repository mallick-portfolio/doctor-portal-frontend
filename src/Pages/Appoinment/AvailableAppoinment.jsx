import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentCard from "./AppoinmentCard.jsx";
import BookingModal from "./BookingModal.jsx";
import { useQuery } from "react-query";
import Loader from "../Shared/Loader.jsx";
const AvailableAppoinment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");
  const {
    isLoading,
    data: services,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loader />;
  }
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
          <AppoinmentCard
            setTreatment={setTreatment}
            key={service._id}
            service={service}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppoinment;
