import React from "react";
import bannerBg from "../../assets/images/bg.png";
import CommonBtn from "../Shared/CommonBtn.jsx";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div
      className="hero lg:px-12 mx-auto my-10"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <CommonBtn>GET STARTED</CommonBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
