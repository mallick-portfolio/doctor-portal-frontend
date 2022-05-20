import React from 'react'
import doctor from '../../assets/images/doctor-small.png'
import appoinment from '../../assets/images/appointment.png'
import CommonBtn from '../Shared/CommonBtn.jsx'
const HomeAppoinment = () => {
  return (
    <div class="hero lg:px-12 mx-auto my-28" style={{ backgroundImage: `url(${appoinment})` }}>
  <div class="hero-content py-0 flex-col lg:flex-row">
    <img src={doctor} class="lg:max-w-lg -mt-28 hidden lg:block" alt='' />
    <div className='text-white p-3 md:p-4 lg:p-6'>
      <h1 class="text-xl text-secondary">Appointment</h1>
      <h1 class="text-5xl font-bold">Make an appointment Today</h1>
      <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <CommonBtn>GET STARTED</CommonBtn>
    </div>
  </div>
</div>
  )
}

export default HomeAppoinment
