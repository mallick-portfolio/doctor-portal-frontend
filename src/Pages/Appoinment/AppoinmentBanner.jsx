import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
