import React from "react";
import treatment from "../../assets/images/treatment.png";
import CommonBtn from "../Shared/CommonBtn.jsx";
const HomeTreatMent = () => {
  return (
    <div className="hero lg:px-12 mx-auto my-28">
      <div className="hero-content flex-col lg:flex-row lg:px-20 md:px-12 sm:px-6">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="lg:ml-10">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <CommonBtn>GET STARTED</CommonBtn>
        </div>
      </div>
    </div>
  );
};

export default HomeTreatMent;
