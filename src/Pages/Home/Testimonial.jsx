import React from "react";
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialCard from "./TestimonialCard.jsx";
const testimonials = [
  {
    _id: 1,
    name: "Winson Herry",
    location: 'California',
    des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    img: people1,
  },
  {
    _id: 2,
    name: "Winson Herry",
    location: 'California',
    des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    img: people2,
  },
  {
    _id: 3,
    name: "Winson Herry",
    location: 'California',
    des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    img: people3,
  },
];
const Testimonial = () => {
  return (
    <div className="my-28 lg:px-16 mx-auto">
      <div className="mb-10">
        <h1 className="text-2xl text-secondary">Testimonial</h1>
        <h3 className="text-4xl">What Our Patients Says</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
