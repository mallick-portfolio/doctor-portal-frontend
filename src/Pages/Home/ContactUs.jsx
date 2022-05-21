import React from "react";
import appoinment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <div
      className="lg:px-16 mx-auto my-28"
      style={{ backgroundImage: `url(${appoinment})` }}
    >
      <div className=" py-12">
        <div className="text-center mb-10">
          <h1 className="text-2xl text-secondary">Contact Us</h1>
          <h3 className="text-4xl text-white">Stay connected with us</h3>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
              <form action="">
                <div className="mb-3">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Email Address"
                    className="border border-gray-300 shadow p-3 w-full rounded"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder="Subject"
                    className="border border-gray-300 shadow p-3 w-full rounded"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="border border-gray-300 shadow p-3 w-full rounded"
                    cols="10"
                    rows="4"
                  ></textarea>
                </div>

                <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
