import React from "react";
import bannerBg from "../../assets/images/bg.png";
import CommonBtn from "../Shared/CommonBtn.jsx";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div
      class="hero px-12 mx-auto"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
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
