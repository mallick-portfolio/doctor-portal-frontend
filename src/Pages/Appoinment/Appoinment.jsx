import React, { useState } from 'react'
import Footer from '../Shared/Footer.jsx';
import AppoinmentBanner from './AppoinmentBanner.jsx'
import AvailableAppoinment from './AvailableAppoinment.jsx';

const Appoinment = () => {
 const [date, setDate] = useState(new Date());

  return (
    <div className="lg:px-16 mx-auto my-12">
      <AppoinmentBanner date={date} setDate={setDate} />
      <AvailableAppoinment date={date} />
      <Footer />
    </div>
  )
}

export default Appoinment
