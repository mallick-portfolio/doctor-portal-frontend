import React from "react";
import { DayPicker } from "react-day-picker";
import chair from '../../assets/images/chair.png'
const Appoinment = () => {
  return (
    <div className="lg:px-12 mx-auto my-12">
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="lg:max-w-lg rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <DayPicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
