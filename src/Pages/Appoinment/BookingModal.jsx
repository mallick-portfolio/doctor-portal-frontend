import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  console.log(treatment);
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-3">{treatment?.name}</h3>
          <form>
            <div className="mb-2">
              <input
                disabled
                // {...register("email", {
                //   required: "Please enter your email address",
                // })}
                value={format(date, "PP")}
                placeholder="email"
                className="input input-bordered w-full "
              />
              {/* {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )} */}
            </div>
            <div className="mb-2">
              <select class="select select-bordered w-full">
                {treatment?.slots.map((slot, i) => (
                  <option key={i}>{slot}</option>
                ))}
              </select>
              {/* {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )} */}
            </div>
            <div className="mb-2">
              <input
                // {...register("email", {
                //   required: "Please enter your email address",
                // })}
                
                placeholder="Full Name"
                className="input input-bordered w-full "
              />
              {/* {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )} */}
            </div>
            <div className="mb-2">
              <input
                // {...register("email", {
                //   required: "Please enter your email address",
                // })}
                
                placeholder="Email"
                className="input input-bordered w-full "
              />
              {/* {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )} */}
            </div>
            <div className="mb-2">
              <input
                // {...register("email", {
                //   required: "Please enter your email address",
                // })}
                
                placeholder="Phone"
                className="input input-bordered w-full "
              />
              {/* {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )} */}
            </div>
            

            <div className="mb-2">
              <input
                type="submit"
                value={"Submit"}
                className="btn w-full bg-accent border-0"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
