import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import axios from "axios";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
import { toast } from "react-toastify";
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  console.log(treatment)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formatedDate = format(date, "PP");
  const onSubmit = async (data, e) => {
    const slot = e.target.slot.value;
    const booking = {
      ...data,
      treatmentId: treatment?._id,
      date: formatedDate,
      slot,
      treatment: treatment?.name,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formatedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have and appointment on ${formatedDate} at ${slot}`
          );
        }
        setTreatment(null)
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-3">{treatment?.name}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <input
                disabled
                value={format(date, "PP")}
                placeholder="email"
                className="input input-bordered w-full "
              />
            </div>
            <div className="mb-2">
              <select
                name="slot"
                value={treatment?.slots[0]}
                className="select select-bordered w-full"
              >
                {treatment?.slots.map((slot, i) => (
                  <option key={i}>{slot}</option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <input
                {...register("patientName", {
                  value: user?.displayName,
                })}
                disabled
                placeholder="Full Name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="mb-2">
              <input
                {...register("patient", {
                  value: user?.email,
                })}
                disabled
                placeholder="Email"
                className="input input-bordered w-full "
              />
            </div>
            <div className="mb-2">
              <input
                {...register("phone", {
                  required: "Please enter your phone",
                })}
                placeholder="Phone"
                className="input input-bordered w-full "
              />
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="mb-2 modal-action">
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
