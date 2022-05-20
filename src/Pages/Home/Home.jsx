import React from 'react'
import Banner from './Banner.jsx'
import ContactUs from './ContactUs.jsx'
import HomeAppoinment from './HomeAppoinment.jsx'
import HomeContact from './HomeContact.jsx'
import HomeTreatMent from './HomeTreatMent.jsx'
import Services from './Services.jsx'
import Testimonial from './Testimonial.jsx'

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <HomeContact />
      <Services />
      <HomeTreatMent />
      <HomeAppoinment />
      <Testimonial />
      <ContactUs />
    </div>
  )
}

export default Home
